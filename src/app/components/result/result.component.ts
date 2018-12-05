import { Component, OnInit } from '@angular/core';
import { HudukkoService } from 'src/app/service/hudukko.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  private flipkart = new BehaviorSubject<any>(null);
  private snapdeal = new BehaviorSubject<any>(null);

  constructor(public hudkoService: HudukkoService) {
    hudkoService.flipkartdata$.subscribe(data => this.flipkart = data);
    hudkoService.snapdealData$.subscribe(data => this.snapdeal = data);
  }

  ngOnInit() {
    console.log(this.flipkart, this.snapdeal);
  }

}
