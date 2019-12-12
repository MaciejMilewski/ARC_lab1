import { Component, OnInit } from '@angular/core';
import { KnifesService } from 'src/app/services/knifes.service';
import { IKnife } from 'src/app/components/model/iknife';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-knife-list-item-details',
  templateUrl: './knife-list-item-details.component.html',
  styleUrls: ['./knife-list-item-details.component.scss']
})
export class KnifeListItemDetailsComponent implements OnInit {

  knifeId = this.route.snapshot.params['id'];
  knife: IKnife;
  edit: boolean = false;

  constructor(private ks: KnifesService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.getKnife(this.knifeId);
  }

  getKnife(id: string){
    this.ks.getKnifeById(id).subscribe((data) => this.knife = data);
  }


}
