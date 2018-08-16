import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, AlertService } from '../services';
import{User} from'../models';
import { routing }  from '../app.routing';
import {ViewChild} from '@angular/core';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Observable, Subject, merge} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';



@Component({ 
  selector: 'ngbd-datepicker-popup', 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', ]



})
export class HomeComponent implements OnInit {
 

  constructor(private router: Router, private userService: UserService,private alertService: AlertService, private formBuilder: FormBuilder,) { }

 
  ngOnInit() {
     
 
  }

 
Logout(){
  localStorage.clear();
 // localStorage.removeItem('userToken');
  this.router.navigate(['/login']);
this.alertService.success('Signed out successfully');
}
}
