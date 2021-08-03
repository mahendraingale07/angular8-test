import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // API path
  url = 'https://reqres.in';

  constructor(private http: HttpClient) { }

  //Login
  login(data) {
    return this.http
      .post(this.url+'/api/login', data)
      .pipe(map((results) => results));
  }

  //Get People list
  getPeopleList() {
    return this.http
      .get(this.url+'/api/users?page=2')
      .pipe(map((results) => results));
  }

  //Get Single User list
  getSingleUserList() {
    return this.http
      .get(this.url+'/api/users/7')
      .pipe(map((results) => results));
  }
}
