import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoesService {

  constructor(public http: HttpClient) { }

  url: string = `http://127.0.0.1:8080/api/v1/shoes`

   getAllShoes(){
   return  this.http.get(this.url)
  }
}
