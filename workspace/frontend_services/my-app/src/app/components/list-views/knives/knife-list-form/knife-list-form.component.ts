import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IKnife } from 'src/app/components/model/iknife';
import { KnifesService } from 'src/app/services/knifes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-knife-list-form',
  templateUrl: './knife-list-form.component.html',
  styleUrls: ['./knife-list-form.component.scss']
})
export class KnifeListFormComponent implements OnInit {

  knivesForm: FormGroup;
  knifeId = this.route.snapshot.params['id'];
  @Input() knife: IKnife;

  constructor(private fb: FormBuilder, private ks: KnifesService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.knivesForm = this.fb.group({
      application: ['', [Validators.required,]],
      dualhand: ['', [Validators.required,]],
      length: ['', [Validators.required,]],
      material: ['', [Validators.required,]],
      model: ['', [Validators.required,]],
      price: ['', [Validators.required,]],
      producer: ['', [Validators.required,]],
      stainless: ['', [Validators.required,]],
      warranty: ['', [Validators.required,]],
      weight: ['', [Validators.required]],
    });
    if(this.knifeId != undefined){
      this.fillForm();
    }
  }

  fillForm(){
    this.knivesForm.patchValue({
      application: this.knife.application,
      dualhand: this.knife.dualhand,
      length: this.knife.length,
      material: this.knife.material,
      model: this.knife.model,
      price: this.knife.price,
      producer: this.knife.producer,
      stainless: this.knife.stainless,
      warranty: this.knife.warranty,
      weight: this.knife.weight
    });
  }

  onSubmit(){
    this.ks.addKnife(
      this.knivesForm.get('application').value,
      this.stringToBoolean(this.knivesForm.get('dualhand').value),
      this.knivesForm.get('length').value,
      this.knivesForm.get('material').value,
      this.knivesForm.get('model').value,
      this.knivesForm.get('price').value,
      this.knivesForm.get('producer').value,
      this.stringToBoolean(this.knivesForm.get('stainless').value),
      this.knivesForm.get('warranty').value,
      this.knivesForm.get('weight').value);

    window.location.reload();
  }

  onEdit(){
    this.ks.updateKnife(
      this.knivesForm.get('application').value,
      this.stringToBoolean(this.knivesForm.get('dualhand').value),
      this.knivesForm.get('length').value,
      this.knivesForm.get('material').value,
      this.knivesForm.get('model').value,
      this.knivesForm.get('price').value,
      this.knivesForm.get('producer').value,
      this.stringToBoolean(this.knivesForm.get('stainless').value),
      this.knivesForm.get('warranty').value,
      this.knivesForm.get('weight').value,
      this.knifeId);
  
      window.location.reload();
  }

  stringToBoolean(value: string): boolean{
    if(value === "true"){
      return true;
    }else if(value === "false"){
      return false;
    }
  }
}
