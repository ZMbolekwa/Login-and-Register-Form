import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import{Http,Response, Headers,RequestOptions, RequestMethod} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { User} from '../models';
import 'rxjs/add/operator/toPromise';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {
readonly rootUrl = 'http://localhost:49683/';

constructor(private http: HttpClient) { }
// constructor(private http : Http, private httpClient : HttpClient) { }
create(user: User) {
  const body: User = {
    UserId: user.UserId,
    UserName: user.UserName,
    FirstName: user.FirstName,
    LastName: user.LastName,
    Password: user.Password,
    Email: user.Email,
  }
  var reqHeader = new HttpHeaders({'No-Auth':'True'});
  return this.http.post(this.rootUrl + '/api/Account', body,{headers : reqHeader});
}

login(UserName, Password) {
  var data = "username=" + UserName + "&password=" + Password + "&grant_type=password";
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
  return this.http.post(this.rootUrl + '/token', data, { headers: reqHeader });
}


 getUserClaims(){
  // return  this.http.get(this.rootUrl+'/api/claims');
    return this.http.get(this.rootUrl+'api/claims',{headers : new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('userToken')})});
 }




}


