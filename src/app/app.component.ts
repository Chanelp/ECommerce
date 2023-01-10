import { Component, OnInit } from '@angular/core';
import { Calculator } from './calculator';
import { AuthService } from './services/auth.service';
import { TokenService } from './services/token.service';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  showImg = true;
  imgParent = '';

  constructor(
    private authService: AuthService,
    private tokenService: TokenService
  ) {}

  ngOnInit() {
    const token = this.tokenService.getToken();
    if (token) {
      this.authService.getProfile()
      .subscribe();
    }
  }

  toggleImg() {
    this.showImg = !this.showImg;
  }

  onLoaded(img: string) {
    /*console.log("Log padre", img);*/
  }
}
