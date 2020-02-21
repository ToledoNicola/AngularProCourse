import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { tap, debounceTime, map, catchError } from "rxjs/operators";
import { of } from "rxjs";

@Component({
  selector: "app-input-text",
  template: `
    <input type="text" placeholder="Scrivi..." [formControl]="testo" />
    <p *ngIf="testo.hasError('')">errore campo obbilgatorio</p>
    {{ value$ | async }}
  `,
  styleUrls: ["./input-text.component.scss"]
})
export class InputTextComponent implements OnInit {
  testo = new FormControl("", Validators.required);
  value$;
  constructor() {}

  ngOnInit() {
    this.value$ = this.testo.valueChanges.pipe(
      debounceTime(1000),
      map(v => v.uppercase()),
      tap(v => console.log(v)),
      catchError(error => of("errore"))
    );
  }
}
