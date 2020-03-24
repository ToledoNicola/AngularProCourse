import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-redux",
  template: `
    <router-outlet> </router-outlet>
  `,
  styleUrls: ["./redux.component.scss"]
})
export class ReduxComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
