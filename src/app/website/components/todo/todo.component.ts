import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todo: string[] = ['b', 'c'];
  newTask: string = '';
  clsRed:boolean = false;

  agregar(){
    this.todo.push(this.newTask);
    this.newTask = '';
  }

  eliminar(index: number){
    this.todo.splice(index, 1);
  }

  terminada(indice: number){
    const indiceStr = indice.toString();
    const element = document.querySelector(`#id${indiceStr}`);
    element?.classList.toggle('red');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
