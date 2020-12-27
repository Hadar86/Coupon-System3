import { HomeComponent } from './../home/home.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginDetails } from 'src/app/Models/LoginDetails';
import { AdminRestService } from 'src/app/services/adminRest.service';
import { CompanyRestService } from 'src/app/services/company-rest.service';
import { CustomerRestService } from 'src/app/services/customer-rest.service';
import { DialogLoginComponent } from '../dialog-login/dialog-login.component';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private dialog: MatDialog, public adminRestService: AdminRestService, public companyRestService: CompanyRestService, public customerRestService: CustomerRestService, private router: Router) { }

  ngOnInit(): void {



  }

  openLoginDialog() {
    this.dialog.open(DialogLoginComponent);
  }


  public logOut(): void {
    this.adminRestService.clearToken();
    this.companyRestService.clearCompany();
    this.customerRestService.clearCustomer();
    this.router.navigate(['home']);

  }


}


