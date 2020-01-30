import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-search",
  template: `
    <app-input-text></app-input-text>
  `,
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
