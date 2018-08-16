import {Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import{Http,Response,Headers,RequestOptions,RequestMethod} from '@angular/http'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { User } from '../models';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import{Payment, Bookings} from '../models';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';



@Injectable()
export class DashboardService {
 

constructor(private http : Http) { }
  readonly rootUrl = 'http://localhost:49683/';

  showPayments : Payment[];
  showBookings : Bookings[];

getPayments()
{
  this.http.get(this.rootUrl+'api/Payments')
  .map((data :Response) =>{
    return data.json() as Payment[];
  }).toPromise().then(x => {
    this.showPayments = x;
  })
}

getBookings()
{
  this.http.get(this.rootUrl+'api/Bookings')
  .map((data :Response) =>{
    return data.json() as Bookings[];
  }).toPromise().then(x => {
    this.showBookings = x;
  })
}

}