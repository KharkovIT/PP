import {Component, OnInit} from '@angular/core';
import {User} from '../../model/User';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-teacher-main',
  templateUrl: './teacher-main.component.html',
  styleUrls: ['./teacher-main.component.css']
})
export class TeacherMainComponent implements OnInit {




  constructor(private user: User, private authService: AuthService) {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {

  }

  logOut() {
    this.authService.logOut();
    console.log(localStorage.getItem('currentUser'));
  }

}
