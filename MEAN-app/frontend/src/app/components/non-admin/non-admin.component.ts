import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee.model';
import { AuthService } from 'src/app/services/auth.service';
import { NonAdminService } from 'src/app/services/non-admin.service';

@Component({
  selector: 'app-non-admin',
  templateUrl: './non-admin.component.html',
  styleUrls: ['./non-admin.component.css'],
})
export class NonAdminComponent implements OnInit {
  public SearchData: any = '';
  employees: Employee[];
  sideNavStatus: boolean = true;

  constructor(private nonadmin: NonAdminService, private auth: AuthService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.nonadmin.getEmployeeList().subscribe((res: Employee[]) => {
      console.log(res);
      this.employees = res;
    });
  }

  logout(): void {
    this.auth.logout();
    // localStorage.removeItem('token');
    // this.router.navigate(['/login']);
  }
}
