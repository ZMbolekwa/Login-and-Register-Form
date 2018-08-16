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
import{Flights} from '../models';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Traveller } from '../models/traveller';


@Injectable()
export class FlightService {
 
  

    constructor(private http : Http) { }
  readonly rootUrl = 'http://localhost:49683/';
  showFlight : Flights[];
  showCities : Flights[];
 
  id: number
//Get Places when searching 
getFlightsCity()
{
  this.http.get(this.rootUrl+'api/Flight')
  .map((data :Response) =>{
    return data.json() as Flights[];
  }).toPromise().then(x => {
    this.showCities = x;
  })
}

getFlight(dc:string,ac:string, cab : string)
{
  this.http.get(this.rootUrl+'api/Flight?dc='+dc+'&ac='+ac+'&cab='+cab)
  .map((data :Response) =>{
    return data.json() as Flights[];
  }).toPromise().then(x => {
    this.showFlight = x;
  })
}


 getFlights()
{
  this.http.get(this.rootUrl+'api/Flight')
  .map((data :Response) =>{
    return data.json() as Flights[];
  }).toPromise().then(x => {
    this.showFlight = x;
  })
}






}