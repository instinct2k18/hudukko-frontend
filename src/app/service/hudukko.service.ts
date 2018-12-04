import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HudukkoService {

  public API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getProduct(item, price) {

    return this.http.get(this.API_URL + '/products').subscribe(data => {
      console.log(data);
    });

  }
}
