import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShoesService } from 'src/app/services/shoes.service';
import { ActivatedRoute } from '@angular/router';
import { IShoes } from 'src/app/components/model/ishoes';

@Component({
  selector: 'app-shoe-list-form',
  templateUrl: './shoe-list-form.component.html',
  styleUrls: ['./shoe-list-form.component.scss']
})
export class ShoeListFormComponent implements OnInit {

  shoesForm: FormGroup;
  cuts: string[] = ["low", "mid", "high"];
  genders: string[] = ["men", "women", "kids"];
  usages: string[] = ["Lifestyle", "Work", "Basketball", "Football", "Running"];

  shoesId = this.route.snapshot.params['id'];
  @Input() shoes: IShoes;

  constructor(private fb: FormBuilder,
    private ss: ShoesService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.shoesForm = this.fb.group({
      brand: ['', [Validators.required,]],
      color: ['', [Validators.required,]],
      cut: ['', [Validators.required,]],
      gender: ['', [Validators.required,]],
      material: ['', [Validators.required,]],
      model: ['', [Validators.required,]],
      size: ['', [Validators.required,]],
      usage: ['', [Validators.required,]],

    });
    if(this.shoesId != undefined){
      this.fillForm();
    }
  }

  fillForm(){
    this.shoesForm.patchValue({
      brand: this.shoes.brand,
      color: this.shoes.color,
      cut: this.shoes.cut,
      gender: this.shoes.gender,
      material: this.shoes.material,
      model: this.shoes.model,
      size: this.shoes.size,
      usage: this.shoes.usage
    });
  }

  onSubmit() {
    this.ss.addShoes(
      this.shoesForm.get('brand').value,
      this.shoesForm.get('color').value,
      this.shoesForm.get('cut').value,
      this.shoesForm.get('gender').value,
      this.shoesForm.get('material').value,
      this.shoesForm.get('model').value,
      this.shoesForm.get('size').value,
      this.shoesForm.get('usage').value);

    window.location.reload();
  }

  onEdit(){
    this.ss.updateShoes(
      this.shoesForm.get('brand').value,
      this.shoesForm.get('color').value,
      this.shoesForm.get('cut').value,
      this.shoesForm.get('gender').value,
      this.shoesForm.get('material').value,
      this.shoesForm.get('model').value,
      this.shoesForm.get('size').value,
      this.shoesForm.get('usage').value,
      this.shoesId);
    window.location.reload();
  }
  
}
