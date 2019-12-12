import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResponseList } from '../components/model/iresponselist';
import { IRope } from '../components/model/irope';




const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class RopesService {

  url: string = 'https://api-dot-arc-pjatk.appspot.com/api/v1/ropes';

  constructor(private http: HttpClient) { }

  getAllRopes(): Observable<IResponseList>{
    return this.http.get<IResponseList>(this.url);

  }

  getRopeById(id: string): Observable<IRope>{
    return this.http.get<IRope>(this.url + `?id=${id}`);
  }

  addRope(color: string, 
    elongation: number, 
    material: string, 
    melting_point: number, 
    modulus_tenacity: number, 
    price_per_m: number, 
    specific_gravity: number, 
    strength_tenacity: number, 
    twist_type: string, 
    uv_resistance: number){
      return this.http.post(this.url + `?color=${color}&elongation=${elongation}&material=${material}&melting_point=${melting_point}&modulus_tenacity=${modulus_tenacity}&price_per_m=${price_per_m}&specific_gravity=${specific_gravity}&strength_tenacity=${strength_tenacity}&twist_type=${twist_type}&uv_resistance=${uv_resistance}`, {
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


    deleteRope(id: string) {
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

    updateRope(color: string, 
      elongation: number, 
      material: string, 
      melting_point: number, 
      modulus_tenacity: number, 
      price_per_m: number, 
      specific_gravity: number, 
      strength_tenacity: number, 
      twist_type: string, 
      uv_resistance: number,
      id: string){
        return this.http.put(this.url + `?color=${color}&elongation=${elongation}&material=${material}&melting_point=${melting_point}&modulus_tenacity=${modulus_tenacity}&price_per_m=${price_per_m}&specific_gravity=${specific_gravity}&strength_tenacity=${strength_tenacity}&twist_type=${twist_type}&uv_resistance=${uv_resistance}&id=${id}`, {
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
