import { Component, OnInit, Input } from "@angular/core";
import { Movie } from "../../models/movie";

@Component({
  selector: "app-movie-detail",
  template: `
    <p>
      movie-detail works!
    </p>
  `,
  styleUrls: ["./movie-detail.component.scss"],
})
export class MovieDetailComponent implements OnInit {
  @Input() movie: Movie;
  constructor() {}

  ngOnInit(): void {}
}
