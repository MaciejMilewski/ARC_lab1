import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

const url = `https://api-dot-arc-pjatk.appspot.com/api/v1/dvds`

@Injectable({
  providedIn: 'root'
})
export class DvdsService {
    
  constructor(public http: HttpClient) { }

  getAllDvds() {
  return  this.http.get(url);
 }

 getDvdById(id: string) {
  return this.http.get(url + `?id=${id}`)
}

 addDvd(
  title,
  genre,
  length,
  year,
  director,
  music,
  subtitles,
  country,
  audio,
  producer
) {
  return this.http.post(url + `?title=${title}&genre=${genre}&length=${length}&year=${year}&director=${director}&music=${music}&subtitles=${subtitles}&country=${country}&audio=${audio}&producer=${producer}`, {
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

updateDvd(
  title,
  genre,
  length,
  year,
  director,
  music,
  subtitles,
  country,
  audio,
  producer
) {
  return this.http.post(url + '?title=${title}&genre=${genre}&length=${length}&year=${year}&director=${director}&music=${music}&subtitles=${subtitles}&country=${country}&audio=${audio}&producer=${producer}', {
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
