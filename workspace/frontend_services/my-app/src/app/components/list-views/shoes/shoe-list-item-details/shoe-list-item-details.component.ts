import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoesService } from 'src/app/services/shoes.service';
import { IShoes } from 'src/app/components/model/ishoes';

@Component({
  selector: 'app-shoe-list-item-details',
  templateUrl: './shoe-list-item-details.component.html',
  styleUrls: ['./shoe-list-item-details.component.scss']
})
export class ShoeListItemDetailsComponent implements OnInit {

  shoes: IShoes;
  shoesId = this.route.snapshot.params['id'];
  edit: boolean = false;
  

  constructor(
    private ss: ShoesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getShoes(this.shoesId);
    
  }

  getShoes(id: string) {
    this.ss.getShoesById(id).subscribe((data) => this.shoes = data);
  }




}
