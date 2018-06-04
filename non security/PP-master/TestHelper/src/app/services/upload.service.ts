import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppComponent} from '../app.component';
import {Observable} from '../../../node_modules/rxjs';

@Injectable()
export class UploadService {

  constructor(private http: HttpClient) {
  }

  upload(file: any): Observable<any> {
    const fd = new FormData();
    fd.append('image', file, file.name);
    return this.http.post(AppComponent.API_URL + '/check/sendFile', fd);
  }


}
