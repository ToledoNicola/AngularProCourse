import { Component, OnInit } from "@angular/core";
import { merge, interval, of } from "rxjs";
import {
  map,
  filter,
  refCount,
  publish,
  delay,
  concatMap,
  take,
} from "rxjs/operators";

@Component({
  selector: "app-chefs",
  template: `
    <!-- <ul *ngIf="expression">
    </ul> -->
  `,
  styleUrls: ["./chefs.component.scss"],
})
export class ChefsComponent implements OnInit {
  chefs$;
  constructor() {}

  ngOnInit(): void {
    const randomItem = (items) =>
      items[Math.floor(Math.random() * items.length)];

    const dishes = [
      {
        type: "primo",
        name: "🍝",
      },
      {
        type: "secondo",
        name: "🥩",
      },
      {
        type: "dolce",
        name: "🍰",
      },
    ];

    const randomInterval = (minTime, maxTime, maxValues) =>
      interval(minTime).pipe(
        take(maxValues),
        concatMap((i) => of(i).pipe(delay(Math.random() * (maxTime - minTime))))
      );

    const orders$ = randomInterval(1000, 3000, 10).pipe(
      map(() => randomItem(dishes)),
      publish(),
      refCount()
    );

    const chefMaker = (dishType, dishMaker) =>
      orders$.pipe(
        filter((dish) => dish.type === dishType),
        map((dish) => dishMaker(dish))
      );

    const chef1$ = chefMaker("primo", (dish) => ({ name: dish.name }));
    const chef2$ = chefMaker("secondo", (dish) => ({ name: dish.name }));
    const chef3$ = chefMaker("dolce", (dish) => ({ name: dish.name }));

    this.chefs$ = merge(chef1$, chef2$, chef3$);

    const waiter = {
      next: (dish) => console.log("Porto in sala: ", dish),
      error: (e) => console.log("Qualcosa è andato storto"),
      complete: () => console.info("Servizio finito!"),
    };

    this.chefs$.subscribe(waiter);
  }
}
