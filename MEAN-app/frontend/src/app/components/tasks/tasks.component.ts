import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee.model';
import { AuthService } from 'src/app/services/auth.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  empForm: FormGroup;
  showModal: boolean = false;
  editMode: boolean = false;
  employees: Employee[];
  public SearchData: any = '';
  sideNavStatus: boolean = true;
  constructor(
    private fb: FormBuilder,
    private empService: EmployeeService,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.getEmployees();
    this.empForm = this.fb.group({
      _id: [''],
      name: ['Ex. Abhishek Jana', Validators.required],
      position: ['Ex. Full Stack Developer', Validators.required],
      dept: ['Development'],
      task: [''],
      dueDate: [''],
      taskCompletionStatus: [''],
    });
  }

  getEmployees() {
    this.empService.getEmployeeList().subscribe((res: Employee[]) => {
      console.log(res);
      this.employees = res;
    });
  }

  onDeleteEmployee(id) {
    if (confirm('Do you want to delete this employee?')) {
      this.empService.deleteEmployee(id).subscribe(
        (res) => {
          console.log(res);
          this.getEmployees();
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  onEditEmployee(emp: Employee) {
    console.log('in edit');
    this.editMode = true;
    this.showModal = true;
    this.empForm.patchValue(emp);
    this.empForm.get('dueDate').patchValue(this.formatDate(emp.dueDate));
  }
  //for formating the date
  private formatDate(date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }

  onEmpSubmit() {
    if (this.empForm.valid) {
      if (this.editMode) {
        this.empService.updateEmployee(this.empForm.value).subscribe(
          (res) => {
            this.getEmployees();
            this.onCloseModal();
          },
          (err) => console.log(err)
        );
      } else {
        this.empService.addEmployee(this.empForm.value).subscribe(
          (res) => {
            this.getEmployees();
            this.onCloseModal();
          },
          (err) => console.log(err)
        );
      }
    }
  }

  onCloseModal() {
    this.showModal = false;
    this.editMode = false;
  }

  onAddEmployee() {
    this.empForm.reset();
    this.showModal = true;
  }

  logout(): void {
    this.auth.logout();
    // localStorage.removeItem('token');
    // this.router.navigate(['/login']);
  }
}
