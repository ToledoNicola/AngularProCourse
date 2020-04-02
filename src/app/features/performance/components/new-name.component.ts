import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-new-name",
  template: `
    <app-input
      type="text"
      placeholder="Scrivi..."
      [formControl]="testo"
      (keyup.enter)="handleKey($event)"
    ></app-input>
  `,
  styles: [``]
})
export class NewNameComponent implements OnInit {
  @Output() add = new EventEmitter();

  testo = new FormControl("");

  constructor() {}

  ngOnInit() {}

  handleKey(event) {
    this.add.emit(this.testo.value);
    this.testo.reset("");
  }
}
