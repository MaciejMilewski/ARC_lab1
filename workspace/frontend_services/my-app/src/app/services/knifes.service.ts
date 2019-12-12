import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IResponseList } from '../components/model/iresponselist';
import { Observable } from 'rxjs';
import { IKnife } from '../components/model/iknife';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class KnifesService {

  url: string = 'https://api-dot-arc-pjatk.appspot.com/api/v1/knives';

  constructor(private http: HttpClient) { }

  getAllKnives(): Observable<IResponseList>{
    return this.http.get<IResponseList>(this.url);
  }

  getKnifeById(id: string): Observable<IKnife>{
    return this.http.get<IKnife>(this.url + `?id=${id}`);
  }

  addKnife(
    application: string,
    dualhand: boolean,
    length: number,
    material: string,
    model: string,
    price: number,
    producer: string,
    stainless: boolean,
    warranty: string,
    weight: number){
      return this.http.post(this.url + `?application=${application}&dualhand=${dualhand}&length=${length}&material=${material}&model=${model}&price=${price}&producer=${producer}&stainless=${stainless}&warranty=${warranty}&weight=${weight}`, {
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

  deleteKnife(id: string) {
    return this.http.delete(this.url + `?id=${id}`, httpOptions).subscribe(
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

  updateKnife(
    application: string,
    dualhand: boolean,
    length: number,
    material: string,
    model: string,
    price: number,
    producer: string,
    stainless: boolean,
    warranty: string,
    weight: number,
    id: string){
      return this.http.put(this.url + `?application=${application}&dualhand=${dualhand}&length=${length}&material=${material}&model=${model}&price=${price}&producer=${producer}&stainless=${stainless}&warranty=${warranty}&weight=${weight}&id=${id}`, {
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
