import { Component, OnInit } from '@angular/core';
import { RopesService } from 'src/app/services/ropes.service';
import { ActivatedRoute } from '@angular/router';
import { IRope } from 'src/app/components/model/irope';

@Component({
  selector: 'app-rope-list-item-details',
  templateUrl: './rope-list-item-details.component.html',
  styleUrls: ['./rope-list-item-details.component.scss']
})
export class RopeListItemDetailsComponent implements OnInit {

  ropeId = this.route.snapshot.params['id'];
  rope: IRope;
  edit: boolean = false;

  constructor(private rs: RopesService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.getRope(this.ropeId);
  }

  getRope(id: string){
    this.rs.getRopeById(id).subscribe((data) => this.rope = data);
  }

  
}
