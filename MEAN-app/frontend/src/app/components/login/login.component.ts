import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  userLogin() {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value).subscribe(
        (res) => {
          console.log('This is res1' + res);
          localStorage.setItem('token', res.token);
          localStorage.setItem('UserType', res.role);

          this.loginForm.reset();
          this.router.navigate(['/homeAfterlogin']);
        },
        (err) => {
          console.log(err);
          alert('Inavalid user or password');
        }
      );
    }
  }

  // logout(): void {
  //   localStorage.removeItem('token');
  //   this.router.navigate(['/login']);
  // }
}
