import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services';
import{Traveller} from'../models';
import { routing }  from '../app.routing';
import {ViewChild} from '@angular/core';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Observable, Subject, merge} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { AlertService} from '../services';
import { first } from 'rxjs/operators';

@Component({ 
  templateUrl: './traveller.component.html',
  styleUrls: ['./traveller.component.css', ]

})
export class TravellerComponent  implements OnInit {
  
  travellerForm: FormGroup;
  loading = false;
  submitted = false;

  traveller: Traveller;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";



  constructor(private router: Router,
     private userService: UserService,
      // private flightService: FlightService,
      private formBuilder: FormBuilder,
      private alertService: AlertService) { }

 
  ngOnInit() {
 
    this.travellerForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      dob: ['', Validators.required],
      mobileNumber: ['', Validators.required]
      
      
  });

    
    

 
  }

  get f() { return this.travellerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.travellerForm.invalid) {
        return;
    }

    this.loading = true;
    this.userService.addTrveller(this.travellerForm.value)
        .pipe(first())
        .subscribe(
            data => {
              this.alertService.success( 'Traveller added successfully.', true);
                this.router.navigate(['/seats']);
            },
            error => {
              this.alertService.error(error);
                this.loading = false;
            });
}




}
