import { Component, OnInit } from '@angular/core';
import { HudukkoService } from 'src/app/service/hudukko.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  public flipkart = new BehaviorSubject<any>(null);
  public snapdeal = new BehaviorSubject<any>(null);

  constructor(public hudkoService: HudukkoService, private router: Router) {
    hudkoService.flipkartdata$.subscribe(data => this.flipkart = data);
    hudkoService.snapdealData$.subscribe(data => this.snapdeal = data);
  }

  ngOnInit() {
    this.flipkart = null;
    this.snapdeal = null;
    console.log(this.flipkart, this.snapdeal);
  }

}
