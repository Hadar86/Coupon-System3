import { ActionType } from './../../Models/ActionType';
import { DialogComponent } from './../dialog/dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Customer } from './../../Models/Customer';
import { Company } from './../../Models/Company';
import { Component, OnInit } from '@angular/core';
import { AdminRestService } from '../../services/adminRest.service';
import { DialogCompanyComponent } from '../dialog-company/dialog-company.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public customers: Customer[];
  public companies: Company[];
  public showCompanies : boolean;



  constructor(private adminRestService: AdminRestService, private route: ActivatedRoute ,private dialog: MatDialog) { }

  ngOnInit(): void {

    this.adminRestService.getAllCustomers().subscribe(
      (res) => { this.customers = res; },
      (err) => { alert(err.error); });

    this.adminRestService.getAllCompanies().subscribe(
      (res) => { this.companies = res; },
      (err) => { alert(err.error); });

     this.route.params.subscribe(params => {
        this.showCompanies = params['data'] === 'companies';
        });


  }

  public addCustomer(customer: Customer): void {
    this.adminRestService.addCustomer(customer).subscribe(
      () => { this.customers.filter(item => item.id !== customer.id); },
      (err) => { alert(err.message); });
  }
  public updateCustomer(customer: Customer): void {
    this.adminRestService.updateCustomer(customer).subscribe(
      () => { this.customers.filter(item => item.id !== customer.id); },
      (err) => { alert(err.message); });
  }
  public deleteCustomer(customer: Customer): void {
    this.adminRestService.deleteCustomer(customer.id).subscribe(
      () => { this.customers = this.customers.filter(item => item.id !== customer.id); },
      (err) => { alert(err.message); });
  }

  public getOneCustomer(customer: Customer): void {
    this.adminRestService.getOneCustomer(customer.id).subscribe(
      () => { this.customers.filter(Item => Item.id === customer.id); },
      (err) => { alert(err.error); });
  }

  public addCompany(company: Company): void {
    this.adminRestService.addCompany(company).subscribe(
      () => { this.companies.filter(item => item.id !== company.id); },
      (err) => { alert(err.message); });
  }
  public updateCompany(company: Company): void {
    this.adminRestService.updateCompany(company).subscribe(
      () => { this.companies.filter(item => item.id !== company.id); },
      (err) => { alert(err.message); });
  }
  public deleteCompany(company: Company): void {
    this.adminRestService.deleteCompany(company.id).subscribe(
      () => { this.companies = this.companies.filter(item => item.id !== company.id); },
      (err) => { alert(err.message); });
  }

  public getOneCompany(company: Company): void {
    this.adminRestService.getOneCompany(company.id).subscribe(
      () => { this.companies.filter(Item => Item.id === company.id); },
      (err) => { alert(err.error); });
  }
  public openCustomerAddDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, { data: { type: ActionType.Create } })
    dialogRef.afterClosed().subscribe(customer => {
      if(!customer) return;
      this.adminRestService.addCustomer(customer).subscribe(res => {
        this.adminRestService.getAllCustomers().subscribe(customers => { this.customers = customers })
      })
    })

  }
  public openCustomerUpdateDialog(customer: Customer): void {
    const dialogRef = this.dialog.open(DialogComponent, { data: { type: ActionType.Update, customer: customer } })
    dialogRef.afterClosed().subscribe(customer => {
      if(!customer) return;
      this.adminRestService.updateCustomer(customer).subscribe(res => {
        this.adminRestService.getAllCustomers().subscribe(customers => { this.customers = customers }, (err => { alert(err.error) }))
      })
    })
  }
  public openCompanyAddDialog(): void {
    const dialogRef = this.dialog.open(DialogCompanyComponent, { data: { type: ActionType.Create } })
    dialogRef.afterClosed().subscribe(company => {
      if(!company) return;
      this.adminRestService.addCompany(company).subscribe(res => {
        this.adminRestService.getAllCompanies().subscribe(companies => { this.companies = companies })
      })
    })

  }
  public openCompanyUpdateDialog(company: Company): void {
    const dialogRef = this.dialog.open(DialogCompanyComponent, { data: { type: ActionType.Update, company: company } })
    dialogRef.afterClosed().subscribe(company => {
      if(!company) return;
      this.adminRestService.updateCompany(company).subscribe(res => {
        this.adminRestService.getAllCompanies().subscribe(companies => { this.companies = companies })
      }, (err => { alert(err.error) }))
    })
  }


}
