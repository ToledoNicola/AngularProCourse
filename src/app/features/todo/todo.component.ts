import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-todo",
  template: `
    <p>todo works!</p>
  `,
  styleUrls: ["./todo.component.scss"]
})
export class TodoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
