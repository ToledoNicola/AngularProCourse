import { Component, OnInit, Input } from "@angular/core";
import { Movie } from "../../models/movie";
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: "app-movie-list",
  template: `
    <div class="wrapper" @fadeIn *ngFor="let movie of movies">
      <app-movie-card [movie]="movie"></app-movie-card>
    </div>
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
