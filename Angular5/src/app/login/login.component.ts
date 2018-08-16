import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService, UserService } from '../services';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../models';

@Component({templateUrl: 'login.component.html', styleUrls: ['./login.component.css']})
export class LoginComponent implements OnInit {
    user: User
    loginForm: FormGroup;
    loading = false;
    submitted = false;


    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            UserName: ['', Validators.required],
            Password: ['', Validators.required]
        });

    
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit(UserName, Password) {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        
           this.userService.login(this.f.UserName.value, this.f.Password.value)
            .pipe(first())
            .subscribe(
                (data : any) => {
                    localStorage.setItem('userToken',data.access_token);
                    this.alertService.success('Welcome');
                    this.router.navigate(['/']);
                },
                (err : HttpErrorResponse) => {
                    this.alertService.error('Invalid username or password. Sign up for an account.');
                    this.loading = false;
                });
    }

}

