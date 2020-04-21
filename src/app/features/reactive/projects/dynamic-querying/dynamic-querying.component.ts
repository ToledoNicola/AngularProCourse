import { Component, OnInit } from "@angular/core";
import { DataService, Item } from "../../services/data.service";
import { BehaviorSubject, Observable, combineLatest } from "rxjs";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "app-dynamic-querying",
  template: `
    <div class="lista">
      <ng-container *ngIf="items$ | async; let items; else: loading">
        <ul>
          <li *ngFor="let item of items">
            {{ item.text }}
          </li>
        </ul>
        <div *ngIf="items.length === 0">
          Nessun risultato, prova a rimuovere i filtri
        </div>
      </ng-container>

      <ng-template #loading>Loading&hellip;</ng-template>
    </div>
    <div class="filters">
      <div>
        <h4>Filter by size</h4>
        <button
          (click)="filterBySize('small')"
          [ngClass]="{ active: (sizeFilter$ | async) == 'small' }"
        >
          Piccolo
        </button>
        <button
          (click)="filterBySize('medium')"
          [ngClass]="{ active: (sizeFilter$ | async) == 'medium' }"
        >
          Medio
        </button>
        <button
          (click)="filterBySize('large')"
          [ngClass]="{ active: (sizeFilter$ | async) == 'large' }"
        >
          Largo
        </button>
        <button
          (click)="filterBySize(null)"
          *ngIf="this.sizeFilter$.getValue()"
        >
          <em>Reset</em>
        </button>
      </div>
      <div class="filters__color">
        <h4>Filter by color</h4>
        <button
          (click)="filterByColor('red')"
          [ngClass]="{ active: (colorFilter$ | async) == 'red' }"
        >
          Rosso
        </button>
        <button
          (click)="filterByColor('green')"
          [ngClass]="{ active: (colorFilter$ | async) == 'green' }"
        >
          Verde
        </button>
        <button
          (click)="filterByColor('blue')"
          [ngClass]="{ active: (colorFilter$ | async) == 'blue' }"
        >
          Blu
        </button>
        <button
          (click)="filterByColor(null)"
          *ngIf="this.colorFilter$.getValue()"
        >
          <em>Reset</em>
        </button>
      </div>
    </div>
  `,
  styleUrls: ["./dynamic-querying.component.scss"],
})
export class DynamicQueryingComponent {
  items$: Observable<Item[]>;
  sizeFilter$: BehaviorSubject<string | null>;
  colorFilter$: BehaviorSubject<string | null>;

  constructor(data: DataService) {
    this.sizeFilter$ = new BehaviorSubject(null);
    this.colorFilter$ = new BehaviorSubject(null);
    this.items$ = combineLatest(this.sizeFilter$, this.colorFilter$).pipe(
      switchMap(([size, color]) => data.getDynamicQuery(size, color))
    );
  }
  filterBySize(size: string | null) {
    this.sizeFilter$.next(size);
  }
  filterByColor(color: string | null) {
    this.colorFilter$.next(color);
  }
}
