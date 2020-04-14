import { Component, OnInit, Input } from "@angular/core";
import { Movie } from "../../models/movie";

@Component({
  selector: "app-movie-details",
  template: `
    <!-- <img
      [src]="'https://image.tmdb.org/t/p/w400' + movie.poster_path"
      loading="lazy"
    /> -->
    <h2>{{ movie.title }}</h2>
    <p>{{ movie.overview }}</p>
    <strong> Voto: {{ movie.vote_average }}/10 </strong>
  `,
  styleUrls: ["./movie-details.component.scss"],
})
export class MovieDetailsComponent implements OnInit {
  @Input() movie: Movie;
  constructor() {}

  ngOnInit(): void {}
}
