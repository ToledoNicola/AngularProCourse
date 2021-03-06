import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { throwError, Observable } from "rxjs";
import { Movie } from "../models/movie";
interface ErrorMovie {
  status_message: string;
  status_code: number;
}
interface PopularResponse {
  results: Movie[];
  total_pages: number;
  total_results: number;
  page: number;
}
@Injectable()
export class MoviesDataService {
  constructor(private http: HttpClient) {}

  getMovies(listName: string, page = 1): Observable<PopularResponse> {
    return this.http.get(`/movie/${listName}?page=${page}`).pipe(
      map((res) => res as PopularResponse),
      catchError((error: ErrorMovie) => throwError(error.status_message))
    );
  }
  getMovie(id: string): Observable<Movie> {
    return this.http.get(`/movie/${id}`).pipe(
      map((res) => res as Movie),
      catchError((error: ErrorMovie) => throwError(error.status_message))
    );
  }
}
