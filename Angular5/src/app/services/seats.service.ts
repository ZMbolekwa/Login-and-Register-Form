import {Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import{Http,Response,Headers,RequestOptions,RequestMethod} from '@angular/http'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Seats } from '../models';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class SeatsService {
readonly rootUrl = 'http://localhost:49683/';

 
 showSeats : Seats[];

 constructor(private http : Http) { }

  //Show all seats
 getSeats()
 {
   this.http.get(this.rootUrl+'api/Seats')
   .map((data :Response) =>{
     return data.json() as Seats[];
   }).toPromise().then(x => {
     this.showSeats = x;
   })
 }


 



      }

    
