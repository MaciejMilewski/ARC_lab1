import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { IResponseList } from '../components/model/iresponselist';
import { Observable } from 'rxjs';
import { IDvd } from '../components/model/idvd';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class DvdsService {

  url: string = 'https://api-dot-arc-pjatk.appspot.com/api/v1/dvds';

  constructor(private http: HttpClient) { }

  getAllDvds(): Observable<IResponseList>{
    return this.http.get<IResponseList>(this.url);
  }

  getDvdById(id: string): Observable<IDvd>{
    return this.http.get<IDvd>(this.url + `?id=${id}`);
  }

  addDvd(
    audio: string,
    country: string,
    director: string,
    genre: string,
    length: number,
    music: string,
    producer: string,
    subtitles: string,
    title: string,
    year: string){
      return this.http.post(this.url + `?audio=${audio}&country=${country}&director=${director}&genre=${genre}&length=${length}&music=${music}&producer=${producer}&subtitles=${subtitles}&title=${title}&year=${year}`, {
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

  deleteDvd(id: string) {
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

  updateDvd(
    audio: string,
    country: string,
    director: string,
    genre: string,
    length: number,
    music: string,
    producer: string,
    subtitles: string,
    title: string,
    year: string,
    id: string){
      return this.http.put(this.url + `?audio=${audio}&country=${country}&director=${director}&genre=${genre}&length=${length}&music=${music}&producer=${producer}&subtitles=${subtitles}&title=${title}&year=${year}&id=${id}`, {
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

