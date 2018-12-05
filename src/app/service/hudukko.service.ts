import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HudukkoService {

  private flipkartdata = new BehaviorSubject<any>(null);
  public flipkartdata$ = this.flipkartdata.asObservable();

  private snapdealData = new BehaviorSubject<any>(null);
  public snapdealData$ = this.snapdealData.asObservable();

  constructor(private http: HttpClient) { }

  public getFlipkartData(url) {
    return this.http
      .get(url)
      .pipe(data => {
        return data;
      });
  }

  public getsnapdealData(url) {
    return this.http
      .get(url)
      .pipe(data => {
        return data;
      });
  }

  public setFlipkartData(data) {
    this.flipkartdata.next(data);
  }

  public setsnapDealData(data) {
    this.snapdealData.next(data);
  }
}
