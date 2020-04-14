/**
 * questo container comunica con il mocudo cart per inserire i film al carrello
 */

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-buy",
  template: `
    <p>
      buy works!
    </p>
  `,
  styleUrls: ["./buy.component.scss"],
})
export class BuyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
