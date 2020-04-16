import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-playground",
  template: ` <app-input [formControl]="testo"></app-input> `,
  styleUrls: ["./playground.component.scss"],
})
export class PlaygroundComponent implements OnInit {
  testo = new FormControl(null);

  constructor() {}

  ngOnInit(): void {}

  observable() {}
}
