import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login(){
    this.submitted = true;
    console.log(this.registerForm.value);
    
    if (this.registerForm.valid) {
      this.apiService.login(this.registerForm.value).subscribe((response: any) => {        
        this.router.navigateByUrl('people')
      }, (error: any) => {
        alert(error.error.error)
      })
    } else{
      alert("Please fill all the valid details")
    }
  }

}
