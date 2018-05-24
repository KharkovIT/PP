import {Component, OnInit} from '@angular/core';
import {User} from '../../model/User';
import {AuthService} from '../../services/auth.service';
import {MatDialog} from '@angular/material';
import {AddGroupComponent} from './add-group/add-group.component';
import {LinkService} from '../../services/link.service';
import {Link} from '../../model/Link';
import {GroupInfoComponent} from './group-info/group-info.component';

@Component({
  selector: 'app-teacher-groups',
  templateUrl: './teacher-groups.component.html',
  styleUrls: ['./teacher-groups.component.css']
})
export class TeacherGroupsComponent implements OnInit {

  linkList: Link[];
  name: string;
  linkInfo: Link;

  openDialog(): void {
    const dialogRef = this.dialog.open(AddGroupComponent, {
      width: '300px',
      data: {name: this.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.name = result;
    });
  }

  constructor(private user: User, private authService: AuthService, public dialog: MatDialog, private linkService: LinkService, private groupInfo: GroupInfoComponent) {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.getGroups();
  }

  getGroups() {
    this.linkService.getGroups(this.user).subscribe(data => this.linkList = data);
  }

  logOut() {
    this.authService.logOut();
  }

  getInfo(link: Link) {
    this.groupInfo.getInfo(link);
    this.groupInfo.getStudent(link);
  }

  delete(link: Link) {
    this.linkService.delete(link).subscribe();
  }

}
