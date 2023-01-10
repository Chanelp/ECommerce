import { Component } from '@angular/core';
import { Calculator } from './calculator';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showImg = true;
  imgParent = '';

  constructor() {}

  toggleImg(){
    this.showImg = !this.showImg;
  }

  onLoaded(img: string){
    /*console.log("Log padre", img);*/
  }

  ngOnInit(){
    const calc = new Calculator();
    const rta = calc.multiply(3, 5);
    //console.log(rta === 15);

    const rta2 = calc.divide(15,0);
    //console.log(rta2 === null);
  }
}
