import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

const url = `http://127.0.0.1:8080/api/v1/shoes`


@Injectable({
  providedIn: 'root'
})
export class ShoesService {

  constructor(public http: HttpClient) { }

   getAllShoes(){
   return  this.http.get(this.url)
  }
}
