import { Component, OnInit } from '@angular/core';
import { ShoesService } from 'src/app/services/shoes.service';

@Component({
  selector: 'app-shoe-list-view',
  templateUrl: './shoe-list-view.component.html',
  styleUrls: ['./shoe-list-view.component.scss']
})
export class ShoeListViewComponent implements OnInit {

  shoes
  constructor(private shoesService: ShoesService) { }

  getAllshoesFromService() {
    this.shoesService.getAllShoes().subscribe((data) =>
      this.shoes = data);
  }


  ngOnInit() {
    this.getAllshoesFromService();
  }

}
