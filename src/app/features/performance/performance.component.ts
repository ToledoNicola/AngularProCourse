import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-performance",
  template: `
    <div class="row">
      <app-users></app-users>
      <app-users2></app-users2>
    </div>
  `,
  styleUrls: ["./performance.component.scss"]
})
export class PerformanceComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
