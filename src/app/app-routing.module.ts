import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CompanyComponent } from './components/company/company.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  // {path: '', component: LoginComponent},
  {path: 'admin/:data', component: AdminComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'company', component: CompanyComponent},
  {path: 'home', component: HomeComponent},
  {path: 'admin-dashboard', component: AdminDashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
