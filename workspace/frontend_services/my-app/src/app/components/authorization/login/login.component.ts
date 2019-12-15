import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  token = '';
  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) { }


  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(6), Validators.required]],
    })

  }

  onSubmit() {
    this.authService.login(this.loginForm.get('email').value, this.loginForm.get('password').value);
    // this.router.navigate(['/mainView'])
  }
}
