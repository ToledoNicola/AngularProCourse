import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-performance",
  template: `
    <!-- per provare la visibilita della DI tra moduli, component, direttiva -->
    <!-- <app-pippo appProva></app-pippo> -->

    <div class="row">
      <app-users></app-users>
      <app-users2></app-users2>
    </div>
  `,
  styles: [
    `
      :host {
        display: grid;
        place-items: center;
        height: 100%;
      }
      .row {
        width: 100%;
        display: flex;
        justify-content: space-around;
      }
    `
  ]
})
export class PerformanceComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
