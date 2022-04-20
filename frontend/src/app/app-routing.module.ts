import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { RegisterComponent } from './modules/auth/components/register/register.component';
import { AddRentComponent } from './modules/landlord/components/add-rent/add-rent.component';
import { EditRentComponent } from './modules/landlord/components/edit-rent/edit-rent.component';
import { ListRentDetailsComponent } from './modules/landlord/components/list-rent-details/list-rent-details.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'rent-details-list',component:ListRentDetailsComponent},
  {path:'addrent',component:AddRentComponent},
  {path:'editrent',component:EditRentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
