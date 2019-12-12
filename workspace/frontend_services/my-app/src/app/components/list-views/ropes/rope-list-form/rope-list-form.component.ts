import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RopesService } from 'src/app/services/ropes.service';
import { ActivatedRoute } from '@angular/router';
import { IRope } from 'src/app/components/model/irope';

@Component({
  selector: 'app-rope-list-form',
  templateUrl: './rope-list-form.component.html',
  styleUrls: ['./rope-list-form.component.scss']
})
export class RopeListFormComponent implements OnInit {

  ropesForm: FormGroup;
  ropeId = this.route.snapshot.params['id'];
  @Input() rope: IRope;

  constructor(private fb: FormBuilder, private rs: RopesService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.ropesForm = this.fb.group({
      material: ['', [Validators.required,]],
      color: ['', [Validators.required,]],
      elongation: ['', [Validators.required,]],
      melting_point: ['', [Validators.required,]],
      modulus_tenacity: ['', [Validators.required,]],
      price_per_m: ['', [Validators.required,]],
      specific_gravity: ['', [Validators.required,]],
      strength_tenacity: ['', [Validators.required,]],
      twist_type: ['', [Validators.required,]],
      uv_resistance: ['', [Validators.required,Validators.min(0),Validators.max(5)]],
    });
    if(this.ropeId != undefined){
      this.fillForm();
    }
  }

  fillForm(){
    this.ropesForm.patchValue({
      material: this.rope.material,
      color: this.rope.color,
      elongation: this.rope.elongation,
      melting_point: this.rope.melting_point,
      modulus_tenacity: this.rope.modulus_tenacity,
      price_per_m: this.rope.price_per_m,
      specific_gravity: this.rope.specific_gravity,
      strength_tenacity: this.rope.strength_tenacity,
      twist_type: this.rope.twist_type,
      uv_resistance: this.rope.uv_resistance 
    });
  }

  onSubmit(){
    this.rs.addRope(
    this.ropesForm.get('color').value,
    this.ropesForm.get('elongation').value,
    this.ropesForm.get('material').value,
    this.ropesForm.get('melting_point').value,
    this.ropesForm.get('modulus_tenacity').value,
    this.ropesForm.get('price_per_m').value,
    this.ropesForm.get('specific_gravity').value,
    this.ropesForm.get('strength_tenacity').value,
    this.ropesForm.get('twist_type').value,
    this.ropesForm.get('uv_resistance').value);

    window.location.reload();
  }

  onEdit(){
    this.rs.updateRope(
      this.ropesForm.get('color').value,
      this.ropesForm.get('elongation').value,
      this.ropesForm.get('material').value,
      this.ropesForm.get('melting_point').value,
      this.ropesForm.get('modulus_tenacity').value,
      this.ropesForm.get('price_per_m').value,
      this.ropesForm.get('specific_gravity').value,
      this.ropesForm.get('strength_tenacity').value,
      this.ropesForm.get('twist_type').value,
      this.ropesForm.get('uv_resistance').value,
      this.ropeId);
  
      window.location.reload();
  }
}
