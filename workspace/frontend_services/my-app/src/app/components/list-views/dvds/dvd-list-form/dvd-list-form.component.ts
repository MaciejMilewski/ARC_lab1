import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { DvdsService } from 'src/app/services/dvds.service';

@Component({
  selector: 'app-dvd-list-form',
  templateUrl: './dvd-list-form.component.html',
  styleUrls: ['./dvd-list-form.component.scss']
})
export class DvdListFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private dvdsService: DvdsService) { }

  reactiveForm: FormGroup;

  title
  genre
  year
  director
  music
  length
  country
  subtitles
  audio
  producer

  ngOnInit() {
    this.reactiveForm = this.fb.group({
      title: ['', [Validators.required, ]],
      genre: ['', [Validators.required, ]],
      year: ['', [Validators.required, ]],
      director: ['', [Validators.required, ]],
      music: ['', [Validators.required, ]],
      length: ['', [Validators.required, ]],
      country: ['', [Validators.required, ]],
      subtitles: ['', [Validators.required, ]],
      audio: ['', [Validators.required, ]],
      producer: ['', [Validators.required, ]],
  });
  }
  onSubmit() {
    this.title = this.reactiveForm.get('title').value;
    this.genre = this.reactiveForm.get('genre').value;
    this.year = this.reactiveForm.get('year').value;
    this.director = this.reactiveForm.get('director').value;
    this.music = this.reactiveForm.get('music').value;
    this.length = this.reactiveForm.get('length').value;
    this.country = this.reactiveForm.get('country').value;
    this.subtitles = this.reactiveForm.get('subtitles').value;
    this.audio = this.reactiveForm.get('audio').value;
    this.producer = this.reactiveForm.get('producer').value;

    this.dvdsService.addDvd(this.title,
      this.genre,
      this.year,
      this.director,
      this.music,
      this.length,
      this.country,
      this.subtitles,
      this.audio,
      this.producer
      )

      window.location.reload();
  }
 }
