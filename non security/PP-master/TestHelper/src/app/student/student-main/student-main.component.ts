import {Component, OnInit} from '@angular/core';
import {User} from '../../model/User';
import {AuthService} from '../../services/auth.service';
import {MatDialog} from '@angular/material';
import {AddToGroupComponent} from '../add-to-group/add-to-group.component';

@Component({
  selector: 'app-student-main',
  templateUrl: './student-main.component.html',
  styleUrls: ['./student-main.component.css']
})
export class StudentMainComponent implements OnInit {


  constructor(private user: User, private authService: AuthService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
  }

  logOut() {
    this.authService.logOut();
    console.log(localStorage.getItem('currentUser'));
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddToGroupComponent, {
      width: '400px',
    });

  }

}
