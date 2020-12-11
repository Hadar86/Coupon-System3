import { CustomerRestService } from 'src/app/services/customer-rest.service';
import { CompanyRestService } from './../../services/company-rest.service';
import { AdminRestService } from './../../services/adminRest.service';
import { LoginDetails } from './../../Models/LoginDetails';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // date: Date;
  public loginDetails: LoginDetails= new LoginDetails;

  constructor(private router: Router, private adminRestService: AdminRestService, private companyRestService: CompanyRestService, private customerRestService: CustomerRestService) { }

  ngOnInit(): void {
// this.date= new Date();
  }
  onSubmit(form:NgForm){
    switch (this.loginDetails.type) {
      case 'Admin':
      this.adminRestService.loginAdmin(this.loginDetails.email, this.loginDetails.password).subscribe(
        (suc) => {this.router.navigate(['/'+this.loginDetails.type.toLowerCase()]);},
        (err) => {alert(err.error); }
      )

        break;
      case 'Company':
      this.companyRestService.loginCompany(this.loginDetails.email, this.loginDetails.password).subscribe(
          (suc) => {this.router.navigate(['/'+this.loginDetails.type.toLowerCase()]);},
          (err) => {alert(err.error); }
        )
          break;
      case 'Customer':
        this.customerRestService.loginCustomer(this.loginDetails.email, this.loginDetails.password).subscribe(
          (suc) => {this.customerRestService.customer=suc; this.router.navigate(['/'+this.loginDetails.type.toLowerCase()]);},
          (err) => {alert(err.error); }
        )
        break;

      default:
        break;
    }
  }
}
