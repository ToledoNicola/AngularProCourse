import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-input",
  template: `
    <input
      type="text"
      placeholder="Scrivi..."
      [formControl]="testo"
      (keyup.enter)="handleKey($event)"
    />
  `,
  styleUrls: ["./input.component.scss"]
})
export class InputComponent implements OnInit {
  @Output() add = new EventEmitter();

  testo = new FormControl("");

  constructor() {}

  ngOnInit() {}

  handleKey(event) {
    // console.log(event);
    this.add.emit(this.testo.value);
    this.testo.reset();
  }
}
