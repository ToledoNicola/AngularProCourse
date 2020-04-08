import { Component, OnInit, Input } from "@angular/core";
import { Movie } from "../../models/movie";
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: "app-movie-list",
  template: `
    <ng-container *ngIf="movies.length == 0; else elseTemplate">
      <h2>Nessun Film</h2>
    </ng-container>
    <ng-template #elseTemplate>
      <div class="wrapper" @fadeIn *ngFor="let movie of movies">
        <app-movie-card [movie]="movie"></app-movie-card>
      </div>
    </ng-template>
  `,
  styleUrls: ["./movie-list.component.scss"],
  animations: [
    trigger("fadeIn", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("1s ease-out", style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class MovieListComponent implements OnInit {
  @Input() movies: Movie[];
  constructor() {}

  ngOnInit() {}
}
