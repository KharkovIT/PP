import {Injectable} from '@angular/core';
import {User} from '../model/User';
import {AppComponent} from '../app.component';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Md5} from 'ts-md5';


@Injectable()
export class AccountService {

  constructor(public http: HttpClient) {
  }


  createAccount(user: User): Observable<User> {
    const httpHeaders: HttpHeaders = new HttpHeaders();
    httpHeaders.append('Content-Type', 'application/json');
    const options = { headers: httpHeaders };
    return this.http.post<User>(AppComponent.API_URL + '/account/register', user, options);

  }

}
