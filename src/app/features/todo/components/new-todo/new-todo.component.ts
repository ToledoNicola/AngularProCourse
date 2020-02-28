import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-new-todo",
  template: `
    <app-input></app-input>
    <button><h1>+</h1></button>
  `,
  styleUrls: ["./new-todo.component.scss"]
})
export class NewTodoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
