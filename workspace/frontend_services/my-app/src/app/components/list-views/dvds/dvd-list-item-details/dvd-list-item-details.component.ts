import { Component, OnInit } from '@angular/core';
import { IDvd } from 'src/app/components/model/idvd';
import { DvdsService } from 'src/app/services/dvds.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dvd-list-item-details',
  templateUrl: './dvd-list-item-details.component.html',
  styleUrls: ['./dvd-list-item-details.component.scss']
})
export class DvdListItemDetailsComponent implements OnInit {

  dvdId = this.route.snapshot.params['id'];
  dvd: IDvd;
  edit: boolean = false;

  constructor(private ds: DvdsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getDvd(this.dvdId);
  }

  getDvd(id: string){
    this.ds.getDvdById(id).subscribe((data) => this.dvd = data);
  }

}
