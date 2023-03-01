import { makeAutoObservable } from 'mobx';
import { TodoInterface } from '../interfaces/todo.interface';

class TodoClass {
  public todos: TodoInterface[] = [];
  public modal = false;

  public todoForm = {
    name: '',
    description: '',
    type: '',
    date: new Date()
  };

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo: TodoInterface) {
    this.todos.push(todo);
  }

  changeModal() {
    this.modal = !this.modal;
  }
}

export default new TodoClass();
