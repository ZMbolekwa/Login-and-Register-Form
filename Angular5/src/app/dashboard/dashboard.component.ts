import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, DashboardService } from '../services';
import{User, Flights} from'../models';
import { routing }  from '../app.routing';
import {ViewChild} from '@angular/core';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Observable, Subject, merge} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';



@Component({ 
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', ]

})
export class DashboardComponent  implements OnInit {
  
  userClaims: any;
 

  accountholderName : string;
 


  constructor(private router: Router, private userService: UserService, private dashboardService: DashboardService, private formBuilder: FormBuilder,) { }

 
  ngOnInit() {
 
   
 
    // this.flights = JSON.parse(localStorage.getItem('flights'));

  //  this.flightService.getFlights();
 
  this.accountholderName = localStorage.getItem("accountholderName");



  this.dashboardService.getPayments();
  
  }


}
