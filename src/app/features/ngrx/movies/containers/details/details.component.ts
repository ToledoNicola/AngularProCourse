import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectMovie } from "../../store/selectors/data.selectors";
import { getMovie } from "../../store/actions/data.actions";

@Component({
  selector: "app-details",
  template: `
    <ng-container *ngIf="movie$ | async; else elseTemplate">
      <app-movie-details [movie]="movie$ | async"> </app-movie-details>
    </ng-container>
    <ng-template #elseTemplate>
      <!-- <h1>Loading...</h1> -->
      <p>Seleziona un film per vedere la descrizione</p>
    </ng-template>
  `,
  styleUrls: ["./details.component.scss"],
})
export class DetailsComponent implements OnInit {
  movie$ = this.store.select(selectMovie);

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.store.dispatch(getMovie());
  }
}
