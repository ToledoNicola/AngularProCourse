import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-todo",
  template: `
    <div>
      <app-tot-todos></app-tot-todos>
      <!-- con Data -->
      <!-- <app-todos> </app-todos>  -->

      <!-- con entity -->
      <app-todos-with-entity></app-todos-with-entity>
    </div>
  `,
  styles: [
    `
      :host {
        height: 100%;
        width: 100%;
        display: grid;
        place-items: center;
        app-todos {
          margin-top: 2rem;
        }
      }
    `
  ]
})
export class TodoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
