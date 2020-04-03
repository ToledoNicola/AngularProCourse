import { Component, OnInit, Input } from "@angular/core";
import { Movie } from "../../models/movie";

@Component({
  selector: "app-movie-list",
  template: `
    <app-movie-card
      *ngFor="let movie of movies"
      [movie]="movie"
    ></app-movie-card>
  `,
  styleUrls: ["./movie-list.component.scss"]
})
export class MovieListComponent implements OnInit {
  @Input() movies: Movie[];
  constructor() {}

  ngOnInit() {}
}
