import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ngrx",
  template: `
    <app-navbar></app-navbar>
    <div class="container">
      <router-outlet> </router-outlet>
    </div>
  `,
  styleUrls: ["./ngrx.component.scss"]
})
export class NgrxComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
