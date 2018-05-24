import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TextMaskModule} from 'angular2-text-mask';
import {NgModule} from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule,
  MatListModule, MatMenuModule, MatNativeDateModule, MatRadioModule, MatSelectModule, MatSnackBarModule, MatStepperModule, MatTabsModule,
  MatToolbarModule, MatDialogModule
} from '@angular/material';

import {AppComponent} from './app.component';

import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {LoginComponent} from './login/login.component';
import {SingupComponent} from './singup/singup.component';
import {HeaderComponent} from './header/header.component';
import {LoginFormComponent} from './login/login-form/login-form.component';
import {SingupFormComponent} from './singup/singup-form/singup-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

import {AccountService} from './services/account.service';
import {AuthService} from './services/auth.service';
import {TeacherMainComponent} from './teacher/teacher-main/teacher-main.component';
import {StudentMainComponent} from './student/student-main/student-main.component';


import {AuthGuard} from '../guard/auth.guard';
import {TooltipModule} from 'ng2-tooltip';
import {User} from './model/User';
import {RoleGuard} from '../guard/role.guard';
import {TeacherGroupsComponent} from './teacher/teacher-groups/teacher-groups.component';
import {GroupsService} from './services/groups.service';
import {Group} from './model/Group';
import { AddGroupComponent } from './teacher/teacher-groups/add-group/add-group.component';
import {LinkService} from './services/link.service';
import {Link} from './model/Link';
import {UUID} from 'angular2-uuid';
import { GroupInfoComponent } from './teacher/teacher-groups/group-info/group-info.component';



const appRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'login', component: LoginComponent},
  {path: 'singup', component: SingupComponent},
  {
    path: 'main_student', component: StudentMainComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      expectedRole: 'STUDENT'
    }
  },
  {
    path: 'main_teacher', component: TeacherMainComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      expectedRole: 'TEACHER'
    }
  },
  {
    path: 'teacher_groups', component: TeacherGroupsComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      expectedRole: 'TEACHER'
    }
  },
    {
      path: 'teacher_groups/add_group', component: AddGroupComponent,
      canActivate: [AuthGuard, RoleGuard],
      data: {
        expectedRole: 'TEACHER'
      }
    }



]
;


@NgModule({

  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    SingupComponent,
    HeaderComponent,
    LoginFormComponent,
    SingupFormComponent,
    TeacherMainComponent,
    StudentMainComponent,
    TeacherGroupsComponent,
    AddGroupComponent,
    GroupInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    TooltipModule,
    MatToolbarModule,
    MatIconModule,
    MatRadioModule,
    MatCardModule,
    MatTabsModule,
    MatListModule,
    MatListModule,
    MatDividerModule,
    MatFormFieldModule,
    BrowserModule,
    MatSnackBarModule,
    MatMenuModule,
    BrowserAnimationsModule,
    FormsModule,
    TextMaskModule,
    MatDialogModule,
    HttpModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatStepperModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}),
  ],
  providers: [HttpClientModule, TeacherGroupsComponent, GroupInfoComponent, AccountService, AuthService, AuthGuard, User, Link, RoleGuard, LinkService, GroupsService, Group, UUID, Headers],
  bootstrap: [AppComponent]
})
export class AppModule {
}
