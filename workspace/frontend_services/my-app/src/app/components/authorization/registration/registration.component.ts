import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  constructor(private fb: FormBuilder,
    private authService: AuthService) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(6), Validators.required]],
    })

  }

  onSubmit() {

    this.authService.register(this.registrationForm.get('email').value,
      this.registrationForm.get('password').value).subscribe((data) => { console.log(data)})

  }
}
