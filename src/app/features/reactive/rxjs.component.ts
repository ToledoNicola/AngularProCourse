import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-rxjs",
  template: `
    <!-- <app-search></app-search> -->
    <app-dynamic-querying> </app-dynamic-querying>
  `,
  styleUrls: ["./rxjs.component.scss"],
})
export class RxjsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
