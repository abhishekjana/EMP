import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  constructor(
    private registerService: RegisterService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  userRegister() {
    if (this.registerForm.valid) {
      this.registerService.register(this.registerForm.value).subscribe(
        (res) => {
          alert('Registeration successfull, please login!!');
          this.registerForm.reset();
          this.router.navigate(['/login']);
          // alert(res.message);
        },
        (err) => {
          //this.error = err(err.message);
          alert('Error with the registeration, please try again');
        }
      );
    }
  }
}
