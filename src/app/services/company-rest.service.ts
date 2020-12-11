import { Coupon } from './../Models/Coupon';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Company } from '../Models/Company';

@Injectable({
  providedIn: 'root'
})
export class CompanyRestService {
  private BASE_URL = 'http://localhost:8080/companies';
  private GET_ALL_COMPANY_COUPONS_URL = this.BASE_URL + '/getAllCompanyCoupons';
  private GET_COMPANY_DETAILS_URL = this.BASE_URL + '/getCompanyDetails';
  private DELETE_COUPON_URL = this.BASE_URL + '/deleteCoupon/';
  private ADD_COUPON_URL = this.BASE_URL + '/addCoupon/';
  private UPDATE_COUPON_URL = this.BASE_URL + '/updateCoupon/';
  private GET_ALL_COMPANY_COUPONS_CATEGORY_URL = this.BASE_URL + '/getAllCompanyCouponCategory';
  private GET_ALL_COMPANY_COUPONS_PRICE_URL = this.BASE_URL + '/getAllCompanyCouponMaxPrice';
  private LOGIN_COMPANY_URL = this.BASE_URL + '/login/';

  company: Company;

  constructor(private httpClient: HttpClient) { }

  public getAllCompanyCoupons(): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.GET_ALL_COMPANY_COUPONS_URL);
  }
  public getAllCompanyCouponsCategory(): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.GET_ALL_COMPANY_COUPONS_CATEGORY_URL);
  }
  public getAllCompanyCouponsMaxPrice(): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.GET_ALL_COMPANY_COUPONS_PRICE_URL);
  }
  public deleteCoupon(id: number): Observable<any> {
    return this.httpClient.delete(this.DELETE_COUPON_URL + id);
  }

  public addCoupon(coupon: Coupon): Observable<Coupon> {
    return this.httpClient.post<Coupon>(this.ADD_COUPON_URL, coupon);
  }
  public updateCoupon(coupon: Coupon): Observable<Coupon> {
    return this.httpClient.put<Coupon>(this.UPDATE_COUPON_URL, coupon);
  }

  public getCompanyDetails(id: number): Observable<Company> {
    return this.httpClient.get<Company>(this.GET_COMPANY_DETAILS_URL + id);
  }
  public loginCompany(email: string, password: string): Observable<any> {
    return this.httpClient.post<any>(this.LOGIN_COMPANY_URL + email + '/' + password, null);
  }
}

