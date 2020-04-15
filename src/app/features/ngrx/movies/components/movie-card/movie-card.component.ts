import { Component, OnInit, Input } from "@angular/core";
import { Movie } from "../../models/movie";

@Component({
  selector: "app-movie-card",
  template: `
    <div class="image">
      <img
        [src]="'https://image.tmdb.org/t/p/w400' + movie.poster_path"
        loading="lazy"
      />
    </div>
    <div class="content">
      <h2>{{ movie.title }}</h2>
    </div>
  `,
  styleUrls: ["./movie-card.component.scss"],
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Movie;
  constructor() {}

  ngOnInit() {}
}
