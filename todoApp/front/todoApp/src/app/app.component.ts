import { Component, OnInit } from '@angular/core';
import { TodosService } from './data/services/todos.service';
import { Todo } from './data/model/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  todos: Todo[] =[];
  newTodoText: string = "";

  constructor(private service: TodosService) {}
  
  ngOnInit(): void {
    this.getAllTodo();
  }

  getAllTodo() {
    this.service.getTodos().subscribe(
      todo => 
        this.todos = todo
    )
  }

  addTodos(){
    if (this.newTodoText.trim() === '') return;
    this.service.addTodo({
      id: 0,
      text: this.newTodoText,
      isCompleted: false
    }).subscribe(
      () => {
        this.newTodoText = ''; 
        this.getAllTodo(); 
      }
    );
  }

  deleteTodo(id: number) {
    this.service.deleteTodo(id).subscribe(
      () => this.getAllTodo()
    );
  }


  toggleCompletion(todo: Todo) {
    todo.isCompleted = !todo.isCompleted;
    this.service.updateTodoCompletion(todo.id).subscribe(
      () => this.getAllTodo()
    );
  }

  
}
