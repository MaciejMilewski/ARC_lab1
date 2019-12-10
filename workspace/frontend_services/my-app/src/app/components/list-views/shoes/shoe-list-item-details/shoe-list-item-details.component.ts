import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoesService } from 'src/app/services/shoes.service';
import { Location } from '@angular/common';
import { IShoe } from '../models';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shoe-list-item-details',
  templateUrl: './shoe-list-item-details.component.html',
  styleUrls: ['./shoe-list-item-details.component.scss']
})
export class ShoeListItemDetailsComponent implements OnInit {

  shoe;
  shoeId
  isEdited = false;
  reactiveForm: FormGroup;

  constructor(
    private shoesService: ShoesService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder) { }


    getShoe(id: string) {
      this.shoesService.getShoeById(id).subscribe(
        (shoe: IShoe) => {
          this.editShoe(shoe);
          this.shoe = shoe;
          console.log(shoe)
        },
        (err: any) => console.log(err)
      );
    }

    editShoe(shoe: IShoe) {
      
      this.reactiveForm.patchValue({
        brand: shoe.brand,
        color: shoe.color,
        cut: shoe.cut,
        gender: shoe.gender,
        material: shoe.material,
        model: shoe.model,
        size: shoe.size,
        usage: shoe.usage  
      });

    }
  

  ngOnInit() {
    this.reactiveForm = this.fb.group({
      brand: ['Jordan'],
      color: [''],
      cut: [''],
      gender: [''],
      material: [''],
      model: [''],
      size: [''],
      usage: [''],

    });



    this.shoeId = this.route.snapshot.params['id'];

    this.shoesService.getShoeById(this.shoeId).subscribe((data) =>
      this.shoe = data);
  }

}
