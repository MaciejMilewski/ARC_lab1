import { Component, OnInit } from '@angular/core';
import { DvdsService } from 'src/app/services/dvds.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dvd-list-view',
  templateUrl: './dvd-list-view.component.html',
  styleUrls: ['./dvd-list-view.component.scss']
})
export class DvdListViewComponent implements OnInit {

  dvds?: any = [];  
  constructor(private dvdService: DvdsService, private router: Router) { }

  getAllDvdsFromService() {
    this.dvdService.getAllDvds().subscribe((data) =>
      this.dvds = data);
  }

  deleteDvd(dvdId: string) {
    this.dvdService.deleteDvd(dvdId);
    window.location.reload()
  }

  ngOnInit() {
    this.getAllDvdsFromService();
  }

}
