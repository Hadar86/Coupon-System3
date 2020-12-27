import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './components/admin/admin.component';
import { CompanyComponent } from './components/company/company.component';
import { CustomerComponent } from './components/customer/customer.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DialogComponent } from './components/dialog/dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogCompanyComponent } from './components/dialog-company/dialog-company.component';
import { DialogCouponComponent } from './components/dialog-coupon/dialog-coupon.component';
import { DialogDataComponent } from './components/dialog-data/dialog-data.component';
import { HomeComponent } from './components/home/home.component';
import { DialogLoginComponent } from './components/dialog-login/dialog-login.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CompanyComponent,
    CustomerComponent,
    LoginComponent,
    HeaderComponent,
    DialogComponent,
    DialogCompanyComponent,
    DialogCouponComponent,
    DialogDataComponent,
    HomeComponent,
    DialogLoginComponent,
    FooterComponent,
    AdminDashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDialogModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
