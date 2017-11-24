import { Component, OnInit } from '@angular/core';

import {Leader} from '../shared/leader';

import {LeaderService} from '../services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private ldrService : LeaderService) { }
  
  leaders:Leader[];

   ngOnInit() {
     this.leaders = this.ldrService.getLeaders();
   }

}
