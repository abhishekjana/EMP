import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './components/employee/employee.component';
import { HomeAfterLoginComponent } from './components/home-after-login/home-after-login.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NonAdminComponent } from './components/non-admin/non-admin.component';
import { RegisterComponent } from './components/register/register.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { AuthguardGuard } from './guards/authguard.guard';
import { RoleGuard } from './guards/role.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'admin',
    canActivate: [AuthguardGuard, RoleGuard],
    component: EmployeeComponent,
  },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'employee',
    canActivate: [AuthguardGuard],
    component: NonAdminComponent,
  },
  {
    path: 'homeAfterlogin',
    canActivate: [AuthguardGuard],
    component: HomeAfterLoginComponent,
  },
  { path: 'tasks', component: TasksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
