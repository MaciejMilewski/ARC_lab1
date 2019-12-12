import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { IResponseList } from '../components/model/iresponselist';
import { IShoes } from '../components/model/ishoes';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

const url = `https://api-dot-arc-pjatk.appspot.com/api/v1/shoes`

@Injectable({
  providedIn: 'root'
})
export class ShoesService {

  constructor(public http: HttpClient) { }


  getAllShoes(): Observable<IResponseList> {
    return this.http.get<IResponseList>(url)
  }

  getShoesById(id: string): Observable<IShoes> {
    return this.http.get<IShoes>(url + `?id=${id}`)
  }

  addShoes(
    brand: string,
    color: string,
    cut: string,
    gender: string,
    material: string,
    model: string,
    size: number,
    usage: string,
  ) {
    return this.http.post(url + `?brand=${brand}&color=${color}&cut=${cut}&gender=${gender}&material=${material}&model=${model}&size=${size}&usage=${usage}`, {
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


  deleteShoes(id: string) {
    return this.http.delete(url + `?id=${id}`, httpOptions).subscribe(
      (val) => {
        console.log("POST delete call successful value returned in body",
          val);
      },
      response => {
        console.log("POST delete call in error", response);
      },
      () => {
        console.log("The POST delete observable is now completed.");
      })
  }

  updateShoes(
    brand: string,
    color: string,
    cut: string,
    gender: string,
    material: string,
    model: string,
    size: number,
    usage: string,
    id:string) {
    return this.http.put(url + `?brand=${brand}&color=${color}&cut=${cut}&gender=${gender}&material=${material}&model=${model}&size=${size}&usage=${usage}&id=${id}`, {
      'Content-Type': 'application/json'
    }).subscribe(
      (val) => {
        console.log("PUT call successful value returned in body",
          val);
      },
      response => {
        console.log("PUT call in error", response);
      },
      () => {
        console.log("The PUT observable is now completed.");
      });

  }
}
