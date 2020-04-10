import { Component, OnInit, Input } from "@angular/core";
import { Movie } from "../../models/movie";

@Component({
  selector: "app-movie-details",
  template: `
    <img
      [src]="'https://image.tmdb.org/t/p/w400' + movie.poster_path"
      loading="lazy"
    />
    <h1>{{ movie.title }}</h1>
  `,
  styleUrls: ["./movie-details.component.scss"],
})
export class MovieDetailsComponent implements OnInit {
  @Input() movie: Movie;
  constructor() {}

  ngOnInit(): void {}
}
