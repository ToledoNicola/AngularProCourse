import { Component, OnInit } from "@angular/core";
import { debounceTime, map, pluck } from "rxjs/operators";
import { combineLatest, fromEvent } from "rxjs";

@Component({
  selector: "app-bmi",
  template: `
    <p>
      bmi works!
    </p>
  `,
  styleUrls: ["./bmi.component.scss"],
})
export class BmiComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const height$ = fromEvent(document.querySelector("#height"), "input").pipe(
      pluck("target", "value"),
      map((v: any) => v / 100)
    );

    const weight$ = fromEvent(document.querySelector("#weight"), "input").pipe(
      // map((el) => el?.target?.value),
      // or
      pluck("target", "value")
    );

    const range = (n) => {
      if (n < 18.5) return "sottopeso";
      if (n < 25) return "normale";
      return "sovrappeso";
    };

    const calculator$ = combineLatest(height$, weight$).pipe(
      debounceTime(1000),
      map(([height, weight]: [number, number]) => weight / (height * height)),
      map(range)
    );

    calculator$.subscribe(console.log);
  }
}
