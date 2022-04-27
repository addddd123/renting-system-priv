import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { RegisterComponent } from './modules/auth/components/register/register.component';
import { AddRentComponent } from './modules/landlord/components/add-rent/add-rent.component';
import { EditRentComponent } from './modules/landlord/components/edit-rent/edit-rent.component';
import { ListRentDetailsComponent } from './modules/landlord/components/list-rent-details/list-rent-details.component';
import { ViewDetailsComponent } from './modules/tenant/components/view-details/view-details.component';
import { NotificationdetailsComponent } from './modules/landlord/components/notificationdetails/notificationdetails.component';
import { MonthlybookingComponent } from './modules/landlord/components/monthlybooking/monthlybooking.component';
import { AllotmentdetailsComponent } from './modules/landlord/components/allotmentdetails/allotmentdetails.component';
import { RoomdetailsComponent } from './modules/landlord/components/roomdetails/roomdetails.component';
import { DashboardComponent } from './modules/landlord/components/dashboard/dashboard.component';
import { SidenavbarComponent } from './modules/shared/components/sidenavbar/sidenavbar.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'rent-details-list',component:ListRentDetailsComponent},
  {path:'addrent',component:AddRentComponent},
  {path:'editrent',component:EditRentComponent},
  {path:'viewdetails',component:ViewDetailsComponent},
  {path:'notification-dialog',component:NotificationdetailsComponent},
  {path:'monthlybooking',component:MonthlybookingComponent},
  {path:'allotmentdetails',component:AllotmentdetailsComponent},
  {path:'roomdetails',component:RoomdetailsComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'sidenavbar',component:SidenavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
