import { Component, OnInit } from '@angular/core';
import { IResponseList } from 'src/app/components/model/iresponselist';
import { RopesService } from 'src/app/services/ropes.service';

@Component({
  selector: 'app-rope-list-view',
  templateUrl: './rope-list-view.component.html',
  styleUrls: ['./rope-list-view.component.scss']
})
export class RopeListViewComponent implements OnInit {

  ropes: IResponseList;

  constructor(private rs: RopesService) { }

  ngOnInit() {
    this.getList();
  }

  getList(){
    this.rs.getAllRopes().subscribe((data) => this.ropes = data);
  }

  deleteItem(id: string){
    this.rs.deleteRope(id);
    window.location.reload()
  }
}
