import { CompanyRestService } from './../../services/company-rest.service';
import { Component, OnInit } from '@angular/core';
import { Coupon } from './../../Models/Coupon';
import { Company } from 'src/app/Models/Company';
import { ActionType } from 'src/app/Models/ActionType';
import { DialogCouponComponent } from '../dialog-coupon/dialog-coupon.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  static readonly DATE_FMT = 'dd/MMM/yyyy';
  name: string;

  constructor(private companyRestService: CompanyRestService, private dialog: MatDialog) { }
  public companies: Company[];
  public coupons: Coupon[];


  ngOnInit(): void {
    this.name = this.companyRestService.company.name;

    this.companyRestService.getAllCompanyCoupons().subscribe(
      (res) => { this.coupons = res; },
      (err) => { alert(err.error); });



  }
  public addCoupon(coupon: Coupon): void {
    this.companyRestService.addCoupon(coupon).subscribe(
      () => { this.coupons.filter(item => item.id !== coupon.id); },
      (err) => { alert(err.message); });
  }
  public updateCoupon(coupon: Coupon): void {
    this.companyRestService.updateCoupon(coupon).subscribe(
      () => { this.coupons.filter(item => item.id === coupon.id); },
      (err) => { alert(err.message); });
  }
  public deleteCoupon(coupon: Coupon): void {
    this.companyRestService.deleteCoupon(coupon.id).subscribe(
      () => { this.coupons = this.coupons.filter(item => item.id !== coupon.id); },
      (err) => { alert(err.message); });
  }

  public getCompanyDetails(company: Company): void {
    this.companyRestService.getCompanyDetails(company.id).subscribe(
      () => { this.companies.filter(Item => Item.id === company.id); },
      (err) => { alert(err.error); });

  }
  public getAllCompanyCouponsCategory(): void {
    this.companyRestService.getAllCompanyCouponsCategory().subscribe(
      (res) => { this.coupons = res; },
      (err) => { alert(err.error); });
  }
  public getAllCompanyCouponsMaxPrice(): void {
    this.companyRestService.getAllCompanyCouponsMaxPrice().subscribe(
      (res) => { this.coupons = res; },
      (err) => { alert(err.error); });
  }
  public openCouponAddDialog(): void {
    const dialogRef = this.dialog.open(DialogCouponComponent, { data: { type: ActionType.Create } })
    dialogRef.afterClosed().subscribe(coupon => {
      if(!coupon) return;
      this.companyRestService.addCoupon(coupon).subscribe(res => {
        this.companyRestService.getAllCompanyCoupons().subscribe(coupons => { this.coupons = coupons })
      })
    })
  }
  public openCouponUpdateDialog(coupon: Coupon): void {
    const dialogRef = this.dialog.open(DialogCouponComponent, { data: { type: ActionType.Update, coupon: coupon } })
    dialogRef.afterClosed().subscribe(coupon => {
      if(!coupon) return;
      this.companyRestService.updateCoupon(coupon).subscribe(res => {
        this.companyRestService.getAllCompanyCoupons().subscribe(coupons => { this.coupons = coupons })
      })
    })

  }
}


