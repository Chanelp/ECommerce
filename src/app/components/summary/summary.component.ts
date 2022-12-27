import { Component, OnInit, Input, Output, EventEmitter, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit, OnChanges, OnDestroy {
  // Variables y funciones
  img: string  = '';

  @Input('img')
  set changeImg(newImg: string){
    this.img = newImg;
    console.log('Change just img => ', this.img);
    //code
  };

  imgDefault = 'https://www.m2crowd.com/core/i/placeholder.png';

  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();

  // counter: number = 0;
  // counterFn: number | undefined;

  widthImg = 10;
  nombre = 'Lola';
  imgUrl = 'https://www.w3schools.com/howto/img_avatar.png';
  btnState = true;
  Inpval = 'Ingresa tu apellido';
  age = 20;

  register = {
    name: '',
    email: '',
    password: ''
  }

  person = {
    name: 'Jessica',
    age: 34,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  }

  box = {
    width: 10,
    height: 10,
    background: 'pink'
  }

  emojis:string[] = [ '😂' , '🐦', '🐳','🌮', '💚'];
  newEmoji: string = '';

  products = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/glasses.jpg'
    }
  ]

  toggleBtn(){
    this.btnState = !this.btnState;
  }

  increaseAge(){
    if(this.person.age < 100){
      this.person.age++;
    }
  }

  decreaseAge(){
    if(this.person.age > 0){
      this.person.age--;
    }
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addEmoji(){
    this.emojis.push(this.newEmoji);
    this.newEmoji = '';
  }

  removeEmoji(index: number){
    this.emojis.splice(index, 1);
  }

  onRegister(){
    console.table(this.register);
    this.register.name = '';
    this.register.email = '';
    this.register.password = '';
  }

  imgError(){
    this.img = this.imgDefault;
  }

  imgLoaded(){
    console.log("Load hijo");
    this.loaded.emit(this.img);
  }

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', 'changes => ', this.img);
    console.log(changes); //Escucha cualquier cambio de todos los inputs
  }

  ngOnInit() {
    // this.counterFn = window.setInterval(()=> {
    //   this.counter += 1;
    //   console.log('run counter');
    // }, 1000)
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
    //window.clearInterval(this.counterFn);
  }

}
