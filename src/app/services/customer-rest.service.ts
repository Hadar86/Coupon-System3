import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Coupon } from '../Models/Coupon';
import { Customer } from '../Models/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerRestService {
  private BASE_URL = 'http://localhost:8080/customers';
  private GET_ALL_CUSTOMER_COUPONS_URL = this.BASE_URL + '/getAllCustomerCoupons';
  private GET_CUSTOMER_DETAILS_URL = this.BASE_URL + '/getCustomerDetails';
  private PURCHASE_COUPON_URL = this.BASE_URL + '/purchaseCoupon/';
  private GET_ALL_CUSTOMER_COUPONS_CATEGORY_URL = this.BASE_URL + '/getAllCustomerCouponCategory';
  private GET_ALL_CUSTOMER_COUPONS_PRICE_URL = this.BASE_URL + '/getAllCustomerCouponMaxPrice';
  private LOGIN_CUSTOMER_URL = this.BASE_URL + '/login/';
  private GET_ALL_COUPONS = this.BASE_URL + '/getAllCoupons';

  customer: Customer;


  constructor(private httpClient: HttpClient) { }
  public getAllCustomerCoupons(): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.GET_ALL_CUSTOMER_COUPONS_URL);
  }
  public getAllCustomerCouponsCategory(): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.GET_ALL_CUSTOMER_COUPONS_CATEGORY_URL);
  }
  public getAllCustomerCouponsMaxPrice(): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.GET_ALL_CUSTOMER_COUPONS_PRICE_URL);
  }
  public purchaseCoupon(coupon: Coupon): Observable<Coupon> {
    return this.httpClient.post<Coupon>(this.PURCHASE_COUPON_URL, coupon);
  }

  public getCustomerDetails(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.GET_CUSTOMER_DETAILS_URL + id);
  }
  public loginCustomer(email: string, password: string): Observable<Customer> {
    return this.httpClient.post<Customer>(this.LOGIN_CUSTOMER_URL + email + '/' + password, null);
  }

  public getAllCoupons(): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.GET_ALL_COUPONS);
  }
}


