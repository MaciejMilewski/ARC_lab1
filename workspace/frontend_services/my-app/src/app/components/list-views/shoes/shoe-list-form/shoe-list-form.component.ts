import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShoesService } from 'src/app/services/shoes.service';

@Component({
  selector: 'app-shoe-list-form',
  templateUrl: './shoe-list-form.component.html',
  styleUrls: ['./shoe-list-form.component.scss']
})
export class ShoeListFormComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private shoesService: ShoesService) { }
  reactiveForm: FormGroup;

  cuts = ["low", "mid", "high"];
  genders = ["men", "women", "kids"];
  usages = ["Lifestyle", "Work", "Basketball", "Football", "Running"];

  brand
  color
  cut
  gender
  material
  model
  size
  usage


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


  onSubmit() {
    this.brand = this.reactiveForm.get('brand').value;
    this.color = this.reactiveForm.get('color').value;
    this.cut = this.reactiveForm.get('cut').value;
    this.gender = this.reactiveForm.get('gender').value;
    this.material = this.reactiveForm.get('material').value;
    this.model = this.reactiveForm.get('model').value;
    this.size = this.reactiveForm.get('size').value;
    this.usage = this.reactiveForm.get('usage').value;

    this.shoesService.addShoe(this.brand,
      this.color,
      this.cut,
      this.gender,
      this.material,
      this.model,
      this.size,
      this.usage,
      )

      window.location.reload();
  }
}
