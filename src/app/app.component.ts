import { Component, OnInit } from '@angular/core';
import { ReadjsonService } from './readjson.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'practice1102';
  todos: any = [];
  value;
  clickedData: boolean = false;

  constructor(private readJson: ReadjsonService){}

  ngOnInit(){
    this.readJson.getJsonItems()
    .subscribe((response: Response) => {
     // console.log(response.json());
      this.todos = response.json();
    })
    //console.log(this.value);
  }

  onTodoRemoval(todo){
    for (let index = 0; index < this.todos.length; index++) {
      if (todo.name == this.todos[index].name) {
        this.todos.splice(index, 1);
      }
    }
  }

  onSubmit(index){
    // console.log(todo);
    // for (let index = 0; index < this.todos.length; index++) {
      // if (todo.name == this.todos[index].name) {
      //   console.log("hello");
        this.todos[index].strike = true;
        //console.log(this.todos);
      // }
    // }
  }

  onAddingTodo(){
    const myObj = {name: this.value};
    this.todos.push(myObj);
  }
}
