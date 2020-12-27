import { Customer } from './../Models/Customer';
import { Company } from './../Models/Company';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AdminRestService {
  private BASE_URL = 'http://localhost:8080/admin';
  private GET_ALL_CUSTOMERS_URL = this.BASE_URL + '/getAllCustomers';
  private GET_ONE_CUSTOMER_URL = this.BASE_URL + '/getOneCustomer';
  private DELETE_CUSTOMER_URL = this.BASE_URL + '/deleteCustomer/';
  private ADD_CUSTOMER_URL = this.BASE_URL + '/addCustomer/';
  private UPDATE_CUSTOMER_URL = this.BASE_URL + '/updateCustomer/';
  private GET_ALL_COMPANIES_URL = this.BASE_URL + '/getAllCompanies';
  private GET_ONE_COMPANY_URL = this.BASE_URL + '/getOneCompany';
  private DELETE_COMPANY_URL = this.BASE_URL + '/deleteCompany/';
  private ADD_COMPANY_URL = this.BASE_URL + '/addCompany';
  private UPDATE_COMPANY_URL = this.BASE_URL + '/updateCompany/';
  private LOGIN_ADMIN_URL = this.BASE_URL + '/login/';



  constructor(private httpClient: HttpClient) {
    if (sessionStorage.getItem("token")) {
      this.token = sessionStorage.getItem("token");
    }
  }
  token: string;
  public setToken(token :string){
    this.token = token;
    sessionStorage.setItem("token", token);
  }
  public clearToken() {
    this.token = undefined;
    sessionStorage.removeItem("token");
  }

  public getAllCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.GET_ALL_CUSTOMERS_URL);
  }
  public getOneCustomer(id: number): Observable<any> {
    return this.httpClient.get<Customer>(this.GET_ONE_CUSTOMER_URL + id);
  }

  public deleteCustomer(id: number): Observable<any> {
    return this.httpClient.delete(this.DELETE_CUSTOMER_URL + id);
  }

  public addCustomer(customer: Customer): Observable<any> {
    return this.httpClient.post<any>(this.ADD_CUSTOMER_URL, customer);
  }
  public updateCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(this.UPDATE_CUSTOMER_URL, customer);
  }
  public addCompany(company: Company): Observable<string> {
    return this.httpClient.post<string>(this.ADD_COMPANY_URL, company);
  }
  public updateCompany(company: Company): Observable<any> {
    return this.httpClient.put<any>(this.UPDATE_COMPANY_URL, company);
  }
  public deleteCompany(id: number): Observable<any> {
    return this.httpClient.delete(this.DELETE_COMPANY_URL + id);
  }
  public getAllCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.GET_ALL_COMPANIES_URL);
  }
  public getOneCompany(id: number): Observable<any> {
    return this.httpClient.get<Company>(this.GET_ONE_COMPANY_URL + id);
  }

  public loginAdmin(email: string, password: string): Observable<any> {
    return this.httpClient.post<any>(this.LOGIN_ADMIN_URL + email + '/' + password, null);
  }

}
