import { Component, OnInit } from '@angular/core';
import { DvdsService } from 'src/app/services/dvds.service';
import { IResponseList } from 'src/app/components/model/iresponselist';

@Component({
  selector: 'app-dvd-list-view',
  templateUrl: './dvd-list-view.component.html',
  styleUrls: ['./dvd-list-view.component.scss']
})
export class DvdListViewComponent implements OnInit {

  dvds: IResponseList;

  constructor(private ds: DvdsService) { }

  ngOnInit() {
    this.getList();
  }

  getList(){
    this.ds.getAllDvds().subscribe((data) => this.dvds = data);
  }

  deleteDvd(id: string){
    this.ds.deleteDvd(id);
    window.location.reload();
  }

}
