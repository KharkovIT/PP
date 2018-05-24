import {Injectable, OnInit} from '@angular/core';
import {Http, Headers, RequestOptions, Response, RequestOptionsArgs} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { Group } from '../model/Group';
import {User} from '../model/User';
import {AuthService} from './auth.service';
import {AppComponent} from '../app.component';
import {toPromise} from 'rxjs/operator/toPromise';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class GroupsService implements OnInit {

  ngOnInit() {

  }

  constructor(private http: HttpClient, private user: User, private auth: AuthService) {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
  }

getAllGroups(user: User): Observable<any>  {
    const httpHeaders: HttpHeaders = new HttpHeaders();
    httpHeaders.append('Content-Type', 'application/json');
    const options = { headers: httpHeaders };
    return this.http.post(AppComponent.API_URL + '/groups/getAllGroups', user , options  );
  }


}
