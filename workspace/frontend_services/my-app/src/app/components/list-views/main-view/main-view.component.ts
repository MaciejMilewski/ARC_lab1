import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  

  constructor(private auth: AuthService) { }


  logOut() {
    this.auth.logOut()
  }


  ngOnInit() {
  }

}
