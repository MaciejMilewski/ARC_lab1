import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ShoesService } from 'src/app/services/shoes.service';
import { Router } from '@angular/router';
import { IResponseList } from 'src/app/components/model/iresponselist';

@Component({
  selector: 'app-shoe-list-view',
  templateUrl: './shoe-list-view.component.html',
  styleUrls: ['./shoe-list-view.component.scss']
})
export class ShoeListViewComponent implements OnInit {

  shoes: IResponseList;
  constructor(private ss: ShoesService,
    private router: Router) { }

  getShoes() {
    this.ss.getAllShoes().subscribe((data) =>
      this.shoes = data);
  }

  deleteShoe(id: string) {
    this.ss.deleteShoes(id);
    window.location.reload()
  }

  ngOnInit() {
    this.getShoes();
  }

}
