import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shoe-list-form',
  templateUrl: './shoe-list-form.component.html',
  styleUrls: ['./shoe-list-form.component.scss']
})
export class ShoeListFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  reactiveForm: FormGroup;

  cuts = ["low", "mid", "high"];
  genders = ["men", "women", "kids"];
  usages = ["Lifestyle", "Work", "Basketball", "Football", "Running"];

  ngOnInit() {
    this.reactiveForm = this.fb.group({
      brand: ['', [Validators.required]],
      color: ['', [Validators.required,]],
      cut: ['', [Validators.required,]],
      gender: ['', [Validators.required,]],
      material: ['', [Validators.required,]],
      model: ['', [Validators.required,]],
      size: ['', [Validators.required,]],
      usage: ['', [Validators.required,]],

    });
  }
}
