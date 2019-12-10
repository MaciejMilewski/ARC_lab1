import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ShoesService } from 'src/app/services/shoes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shoe-list-view',
  templateUrl: './shoe-list-view.component.html',
  styleUrls: ['./shoe-list-view.component.scss']
})
export class ShoeListViewComponent implements OnInit {

  shoes?: any = [];
  constructor(private shoesService: ShoesService,
    private router: Router) { }

  getAllshoesFromService() {
    this.shoesService.getAllShoes().subscribe((data) =>
      this.shoes = data);
  }

  deleteShoe(shoeId: string) {
    this.shoesService.deleteShoe(shoeId);
    // this.router.navigate(['/shoes']);
    window.location.reload()
  }

  ngOnInit() {
    this.getAllshoesFromService();
  }

}
