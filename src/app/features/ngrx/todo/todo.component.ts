import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-todo",
  template: `
    <div>
      <app-tot-todos></app-tot-todos>
      <!-- <app-todos> </app-todos> -->
      <app-todos-with-entity></app-todos-with-entity>
    </div>
  `,
  styleUrls: ["./todo.component.scss"]
})
export class TodoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
