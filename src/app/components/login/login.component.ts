import { CustomerRestService } from 'src/app/services/customer-rest.service';
import { CompanyRestService } from './../../services/company-rest.service';
import { AdminRestService } from './../../services/adminRest.service';
import { LoginDetails } from './../../Models/LoginDetails';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogLoginComponent } from '../dialog-login/dialog-login.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginDetails: LoginDetails = new LoginDetails;

  constructor(private router: Router, private adminRestService: AdminRestService,
    private companyRestService: CompanyRestService, private customerRestService: CustomerRestService, private dialogRef?: MatDialogRef<DialogLoginComponent>) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    switch (this.loginDetails.type) {
      case 'Admin':
        this.adminRestService.loginAdmin(this.loginDetails.email, this.loginDetails.password).subscribe(
          (suc) => { this.adminRestService.setToken(suc); this.router.navigate(['/' + this.loginDetails.type.toLowerCase()+ '-dashboard']); this.dialogRef.close(); },
          (err) => { alert(err.error); }
        )

        break;
      case 'Company':
        this.companyRestService.loginCompany(this.loginDetails.email, this.loginDetails.password).subscribe(
          (suc) => { this.companyRestService.setCompany(suc); this.router.navigate(['/' + this.loginDetails.type.toLowerCase()]); this.dialogRef.close(); },
          (err) => { alert(err.error); }
        )
        break;
      case 'Customer':
        this.customerRestService.loginCustomer(this.loginDetails.email, this.loginDetails.password).subscribe(
          (suc) => { this.customerRestService.setCustomer(suc); this.router.navigate(['/' + this.loginDetails.type.toLowerCase()]); this.dialogRef.close(); },
          (err) => { alert(err.error); }
        )
        break;

      default:
        break;
    }
  }
}
