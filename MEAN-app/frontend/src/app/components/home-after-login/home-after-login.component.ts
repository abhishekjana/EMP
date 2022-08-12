import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home-after-login',
  templateUrl: './home-after-login.component.html',
  styleUrls: ['./home-after-login.component.css'],
})
export class HomeAfterLoginComponent implements OnInit {
  sideNavStatus: boolean = true;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  logout(): void {
    this.auth.logout();
    // localStorage.removeItem('token');
    // this.router.navigate(['/login']);
  }
}
