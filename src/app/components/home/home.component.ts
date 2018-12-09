import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { HudukkoService } from 'src/app/service/hudukko.service';
import { Product } from '../../model/Product';

export class Data {
  link: string;
  image: string;
  title: string;
  price: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  product: Product;
  public API_URL = 'https://hudukkoli.herokuapp.com/api';

  public flipkartData: Object;
  public snapDealData: Object;

  constructor(
    public auth: AuthService,
    private router: Router,
    public hudukko: HudukkoService
  ) {}

  /// Social Login

  async signInWithGithub() {
    await this.auth.githubLogin();
    return await this.afterSignIn();
  }

  async signInWithGoogle() {
    await this.auth.googleLogin();
    return await this.afterSignIn();
  }

  async signInWithFacebook() {
    await this.auth.facebookLogin();
    await this.afterSignIn();
  }

  async signInWithTwitter() {
    await this.auth.twitterLogin();
    return await this.afterSignIn();
  }

  /// Anonymous Sign In

  async signInAnonymously() {
    await this.auth.anonymousLogin();
    return await this.afterSignIn();
  }

  /// Shared

  private afterSignIn() {
    // Do after login stuff here, such router redirects, toast messages, etc.
    return this.router.navigate(['/']);
  }

  public search(formData) {
    console.log(formData.value);
    // const flipkartUrl = this.API_URL + '/scrapeFlipkart?product=' + product + '&price=' + price;
    // const snapDealUrl = this.API_URL + '/scrapeSnapdeal?product=' + product + '&price=' + price;
    // console.log(flipkartUrl, snapDealUrl);

    // this.hudukko.getFlipkartData(flipkartUrl).subscribe(data => {
    //   this.hudukko.setFlipkartData(data);
    //   console.log('Data Set : ' + data);
    // });

    // this.hudukko.getsnapdealData(snapDealUrl).subscribe(data => {
    //   this.hudukko.setsnapDealData(data);
    //   console.log('Data Set : ' + data);
    // });

  }

  // public scrapeFlipkart(url): Object {
  //   return this.http.get(url).pipe(map(data => {
  //     return data;
  //   }));
  // }

  // public scrapeSnapdeal(url): Object {
  //   return this.http.get(url).pipe(map(data => {
  //     console.log(data);
  //     return data;
  //   }));
  // }
}


// fetchData(item, price) {
//   return this.http
//     .get(this.baseUrl + 'prod=' + item + '&price=' + price)
//     .pipe(data => {
//       return data;
//     });
// }
