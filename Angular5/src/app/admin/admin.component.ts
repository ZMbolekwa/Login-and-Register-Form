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
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css', ]

})
export class AdminComponent  implements OnInit {
  
  userClaims: any;
 

  constructor(private router: Router, private userService: UserService, private dashboardService: DashboardService, private formBuilder: FormBuilder,) { }

 
  ngOnInit() {
 
   
 
 
  
  }


}
