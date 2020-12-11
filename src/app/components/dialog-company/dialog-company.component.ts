import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Company } from 'src/app/Models/Company';

export interface DialogData {
  company: Company;
  type: string;
}

@Component({
  selector: 'app-dialog-company',
  templateUrl: './dialog-company.component.html',
  styleUrls: ['./dialog-company.component.css']
})
export class DialogCompanyComponent implements OnInit {

  company = new Company();
  type: string;
  origin = new Company();


  constructor(public dialogRef: MatDialogRef<DialogCompanyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {

    this.smartCopy(data.company);
    this.type = data.type;
  }
  ngOnInit(): void {
  }
  public smartCopy(company: Company): void {
    if (company) {
      this.company.id = company.id;
      this.company.name = company.name;
      this.company.email = company.email;
      this.company.password = company.password;
      this.company.coupons = company.coupons;

      this.origin.id = this.company.id;
      this.origin.name = this.company.name;
      this.origin.email = this.company.email;
      this.origin.password = this.company.password;
      this.company.coupons = this. company.coupons;



    } else {
      this.company.id = 0;
      this.company.name = '';
      this.company.email = '';
      this.company.password = '';
      this.company.coupons;
    }
  }

  public checkChanges(origin: Company, company: Company): boolean {
    return JSON.stringify(origin) === JSON.stringify(company);
  }


  public onNoClick(): void {
    this.dialogRef.close();
  }

}

