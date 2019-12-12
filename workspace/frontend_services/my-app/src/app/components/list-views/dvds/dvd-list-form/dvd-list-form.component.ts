import { Component, OnInit, Input } from '@angular/core';
import { IDvd } from 'src/app/components/model/idvd';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DvdsService } from 'src/app/services/dvds.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dvd-list-form',
  templateUrl: './dvd-list-form.component.html',
  styleUrls: ['./dvd-list-form.component.scss']
})
export class DvdListFormComponent implements OnInit {

  dvdForm: FormGroup;
  dvdId = this.route.snapshot.params['id'];
  @Input() dvd: IDvd;

  constructor(private fb: FormBuilder, private ds: DvdsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dvdForm = this.fb.group({
      audio: ['', [Validators.required,]],
      country: ['', [Validators.required,]],
      director: ['', [Validators.required,]],
      genre: ['', [Validators.required,]],
      length: ['', [Validators.required,]],
      music: ['', [Validators.required,]],
      producer: ['', [Validators.required,]],
      subtitles: ['', [Validators.required,]],
      title: ['', [Validators.required,]],
      year: ['', [Validators.required]],
    });
    if(this.dvdId != undefined){
      this.fillForm();
    }
  }

  fillForm(){
    this.dvdForm.patchValue({
      audio: this.dvd.audio,
      country: this.dvd.country,
      director: this.dvd.director,
      genre: this.dvd.genre,
      length: this.dvd.length,
      music: this.dvd.music,
      producer: this.dvd.producer,
      subtitles: this.dvd.subtitles,
      title: this.dvd.title,
      year: this.dvd.year
    });
  }

  onSubmit(){
    this.ds.addDvd(
      this.dvdForm.get('audio').value,
      this.dvdForm.get('country').value,
      this.dvdForm.get('director').value,
      this.dvdForm.get('genre').value,
      this.dvdForm.get('length').value,
      this.dvdForm.get('music').value,
      this.dvdForm.get('producer').value,
      this.dvdForm.get('subtitles').value,
      this.dvdForm.get('title').value,
      this.dvdForm.get('year').value);

    window.location.reload();
  }

  onEdit(){
    this.ds.updateDvd(
      this.dvdForm.get('audio').value,
      this.dvdForm.get('country').value,
      this.dvdForm.get('director').value,
      this.dvdForm.get('genre').value,
      this.dvdForm.get('length').value,
      this.dvdForm.get('music').value,
      this.dvdForm.get('producer').value,
      this.dvdForm.get('subtitles').value,
      this.dvdForm.get('title').value,
      this.dvdForm.get('year').value,
      this.dvdId);
  
      window.location.reload();
  }


}
