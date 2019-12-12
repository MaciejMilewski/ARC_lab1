import { Component, OnInit } from '@angular/core';
import { KnifesService } from 'src/app/services/knifes.service';
import { IResponseList } from 'src/app/components/model/iresponselist';

@Component({
  selector: 'app-knife-list-view',
  templateUrl: './knife-list-view.component.html',
  styleUrls: ['./knife-list-view.component.scss']
})
export class KnifeListViewComponent implements OnInit {

  knives: IResponseList;

  constructor(private ks: KnifesService) { }

  ngOnInit() {
    this.getList();
  }
  getList(){
    this.ks.getAllKnives().subscribe((data) => this.knives = data);
  }

  deleteKnife(id: string){
    this.ks.deleteKnife(id);
    window.location.reload()
  }
}
