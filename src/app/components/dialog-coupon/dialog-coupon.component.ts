import { CustomerRestService } from 'src/app/services/customer-rest.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Coupon } from 'src/app/Models/Coupon';
import { CompanyRestService } from 'src/app/services/company-rest.service';

export interface DialogData {
  coupon: Coupon;
  type: string;
}

@Component({
  selector: 'app-dialog-coupon',
  templateUrl: './dialog-coupon.component.html',
  styleUrls: ['./dialog-coupon.component.css']

})
export class DialogCouponComponent implements OnInit {


  coupon = new Coupon();
  type: string;
  origin = new Coupon();
  date = new Date();


  constructor(public dialogRef: MatDialogRef<DialogCouponComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private companyRestService: CompanyRestService, private customerRestService: CustomerRestService) {
      console.log(data.coupon);
    this.smartCopy(data.coupon);
    this.type = data.type;
  }
  ngOnInit(): void {
  }

  public smartCopy(coupon: Coupon): void {
    if (coupon) {
      this.coupon.id = coupon.id;
      this.coupon.companyID = coupon.companyID;
      this.coupon.category = coupon.category;
      this.coupon.title = coupon.title;
      this.coupon.description = coupon.description;
      this.coupon.startDate = coupon.startDate;
      this.coupon.endDate = coupon.endDate;
      this.coupon.amount = coupon.amount;
      this.coupon.price = coupon.price;
      this.coupon.image = coupon.image;


      this.origin.id = this.coupon.id;
      this.origin.companyID = this.coupon.companyID;
      this.origin.category = this.coupon.category;
      this.origin.title = this.coupon.title;
      this.origin.description = this.coupon.description;
      this.origin.startDate = this.coupon.startDate;
      this.origin.endDate = this.coupon.endDate;
      this.origin.amount = this.coupon.amount;
      this.origin.price = this.coupon.price;
      this.origin.image = this.coupon.image;


    } else {
      this.coupon.id = 0;
      this.coupon.companyID ;
      this.coupon.category ;
      this.coupon.title = '';
      this.coupon.description = '';
      this.coupon.startDate ;
      this.coupon.endDate ;
      this.coupon.amount;
      this.coupon.price ;
      this.coupon.image = '';

    }
  }

  public checkChanges(origin: Coupon, coupon: Coupon): boolean {
    return JSON.stringify(origin) === JSON.stringify(coupon);
  }



  public onNoClick(): void {
    this.dialogRef.close();
  }

}

