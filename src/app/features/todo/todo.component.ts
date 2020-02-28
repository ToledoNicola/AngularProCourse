import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-todo",
  template: `
    <app-todos> </app-todos>
  `,
  styleUrls: ["./todo.component.scss"]
})
export class TodoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
