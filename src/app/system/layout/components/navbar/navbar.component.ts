import { Component, OnInit } from '@angular/core';
import { userDataModel } from '../../models/user-data.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  user!: userDataModel;
  ngOnInit(): void {
    const userData = localStorage.getItem('User Login Data');

    this.user = userData ? JSON.parse(userData) : null;
  }
}
