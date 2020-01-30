import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { tap, debounceTime, map } from "rxjs/operators";

@Component({
  selector: "app-input-text",
  template: `
    <input type="text" placeholder="Scrivi..." [formControl]="testo" />
  `,
  styleUrls: ["./input-text.component.scss"]
})
export class InputTextComponent implements OnInit {
  testo = new FormControl("");
  constructor() {}

  ngOnInit() {
    this.testo.valueChanges
      .pipe(
        debounceTime(1000),

        tap(v => console.log(v))
      )
      .subscribe();
  }
}
