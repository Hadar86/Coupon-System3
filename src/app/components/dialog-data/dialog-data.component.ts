import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Coupon } from 'src/app/Models/Coupon';
import { Customer } from 'src/app/Models/Customer';
import { CustomerRestService } from 'src/app/services/customer-rest.service';
import { CustomerComponent } from '../customer/customer.component';

export interface DialogData {
  component: CustomerComponent;


}
@Component({
  selector: 'app-coupons-dialog',
  templateUrl: './dialog-data.component.html',
  styleUrls: ['./dialog-data.component.css']
})
export class DialogDataComponent implements OnInit {

  public coupons: Coupon[];
  public customer: Customer;
  parent: CustomerComponent;

  constructor(public dialogRef: MatDialogRef<DialogDataComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, public customerRestService: CustomerRestService) {
    this.parent= data.component;
  }

  ngOnInit(): void {
    this.customerRestService.getAllCoupons().subscribe((res)=>{ this.coupons = res;});
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

  purchaseCoupon(coupon: Coupon): void {
    this.customerRestService.purchaseCoupon(coupon).subscribe(()=>{
      this.parent.ngOnInit();
      this.ngOnInit();
    });
  }

}

