import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-input",
  template: `
    <input type="text" placeholder="Scrivi..." [formControl]="testo" />
  `,
  styleUrls: ["./input.component.scss"]
})
export class InputComponent implements OnInit {
  /**
   *
   * imlementare https://alligator.io/angular/custom-form-control/ per renderlo un'imput nativo
   *
   */

  testo = new FormControl("", Validators.required);

  constructor() {}

  ngOnInit() {}
}
