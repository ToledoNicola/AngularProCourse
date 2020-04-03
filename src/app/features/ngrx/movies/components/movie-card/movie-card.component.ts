import { Component, OnInit, Input } from "@angular/core";
import { Movie } from "../../models/movie";

@Component({
  selector: "app-movie-card",
  template: `
    <div>
      <h2>{{ movie.title }}</h2>
    </div>
  `,
  styleUrls: ["./movie-card.component.scss"]
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Movie;
  constructor() {}

  ngOnInit() {}
}
