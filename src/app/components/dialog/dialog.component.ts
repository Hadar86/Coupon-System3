import { AdminRestService } from '../../services/adminRest.service';
import { Customer } from '../../Models/Customer';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';



export interface DialogData {
  customer: Customer;
  type: string;
}
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  customer = new Customer();
  type: string;
  origin = new Customer();

  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private adminRestService: AdminRestService) {

    this.smartCopy(data.customer);
    this.type = data.type;
  }


  public smartCopy(customer: Customer): void {
    if (customer) {
      this.customer.id = customer.id;
      this.customer.lastName = customer.lastName;
      this.customer.firstName = customer.firstName;
      this.customer.email = customer.email;
      this.customer.password = customer.password;
      this.customer.coupons= customer.coupons;

      this.origin.id = this.customer.id;
      this.origin.lastName = this.customer.lastName;
      this.origin.firstName = this.customer.firstName;
      this.origin.email = this.customer.email;
      this.origin.password = this.customer.password;


    } else {
      this.customer.id = 0;
      this.customer.lastName = '';
      this.customer.firstName = '';
      this.customer.email = '';
      this.customer.password = '';
    }
  }

  public checkChanges(origin: Customer, customer: Customer): boolean {
    return JSON.stringify(origin) === JSON.stringify(customer);
  }

  ngOnInit(): void {
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

}

