import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


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


  getAllShoes() {
    return this.http.get(url)
  }

  getShoeById(id: string) {
    return this.http.get(url + `?id=${id}`)
  }

  addShoe(
    brand,
    color,
    cut,
    gender,
    material,
    model,
    size,
    usage,
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


  deleteShoe(id: string) {
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


}
