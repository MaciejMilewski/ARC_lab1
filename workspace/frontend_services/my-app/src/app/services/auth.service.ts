import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


const url = `https://api-dot-arc-pjatk.appspot.com/api/v1`

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  constructor(public http: HttpClient) { }

  register(email: string, password: string) {
    return this.http.post<any>(url + `/register?email=${email}&password=${password}`, {
      'Content-Type': 'application/json'
    });
  }

  login(email: string, password: string) {
    return this.http.post<any>(url + `/login?email=${email}&password=${password}`, {
      'Content-Type': 'application/json'
    }).subscribe(
      (val) => {
        console.log("POST call successful value returned in body",
          val);
      },
      response => {
        console.log("POST call in error", response);
      },
      () => {
        console.log("The POST observable is now completed.");
      });
  }







}
