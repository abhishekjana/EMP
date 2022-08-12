import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  @Input() sideNavStatus: boolean = false;
  isAdmin: boolean = false;

  list = [
    {
      number: '1',
      name: 'home',

      link: '/homeAfterlogin',
    },
    {
      number: '2',
      name: 'employee',

      link: '/employee',
    },
    {
      number: '3',
      name: 'admin-console',

      link: '/admin',
    },
    {
      number: '4',
      name: 'tasks',

      link: '/tasks',
    },
  ];
  constructor() {}

  ngOnInit(): void {
    let Role = localStorage.getItem('UserType');
    if (Role == 'admin') {
      this.isAdmin = true;
    } else this.isAdmin = false;
  }
}
