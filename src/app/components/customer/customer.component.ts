import { Category } from './../../Models/Category';
import { DialogData } from './../dialog/dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActionType } from 'src/app/Models/ActionType';
import { Coupon } from 'src/app/Models/Coupon';
import { Customer } from 'src/app/Models/Customer';
import { CustomerRestService } from 'src/app/services/customer-rest.service';
import { DialogCouponComponent } from '../dialog-coupon/dialog-coupon.component';
import { DialogComponent } from '../dialog/dialog.component';
import { DialogDataComponent } from '../dialog-data/dialog-data.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  DialogCouponComponent: any;
  name: string;
  maxPrice: number;
  public customers: Customer[];
  public coupons: Coupon[];
  public customerCoupons: Coupon[];
  public category: number;
  categories = [
    '',
    "FOOD",
    "ELECTRICITY",
   "RESTAURANT",
    "VACATION",
  ]

  constructor(private customerRestService: CustomerRestService, private dialog: MatDialog) {
   }


  ngOnInit(): void {


    this.name = this.customerRestService.customer.firstName + " " + this.customerRestService.customer.lastName
    this.customerRestService.getAllCustomerCoupons().subscribe(
      (res) => { this.customerCoupons = res; this.coupons=this.customerCoupons; },
      (err) => { alert(err.error); });
  }
  public purchaseCoupon(coupon: Coupon): void {
    this.customerRestService.purchaseCoupon(coupon).subscribe(
      () => { this.customerCoupons.filter(item => item.id !== coupon.id);
        this.coupons=this.customerCoupons;},
      (err) => { alert(err.message); });
  }

  public getCustomerDetails(customer: Customer): void {
    this.customerRestService.getCustomerDetails(customer.id).subscribe(
      () => { this.customers.filter(Item => Item.id === customer.id); },
      (err) => { alert(err.error); });
  }
  public getAllCustomerCouponsCategory(): void {
    this.customerRestService.getAllCustomerCouponsCategory().subscribe(
      (res) => { this.coupons = res; },
      (err) => { alert(err.error); });
  }

  public getAllCustomerCouponsMaxPrice(): void {
    this.customerRestService.getAllCustomerCouponsMaxPrice().subscribe(
      (res) => { this.coupons = res; },
      (err) => { alert(err.error); });
  }
  public getAllCoupons(): void {
    this.dialog.open(DialogDataComponent, { data: { component: this } });

  }

  FilterCoupons() {
    let filteredCoupons = this.customerCoupons;
    console.log("category", this.category);

    if (this.category)
      filteredCoupons = filteredCoupons.filter((coupon)=>{console.log("coupon", coupon);return coupon.category === this.category});
    if (this.maxPrice)
      filteredCoupons = filteredCoupons.filter((coupon)=>coupon.price <= this.maxPrice);
    this.coupons = filteredCoupons;
  }
}
