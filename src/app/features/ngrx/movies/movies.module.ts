import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MoviesComponent } from "./movies.component";
import { RouterModule } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import * as fromMovies from "./store/reducers/movies.reducer";
import { EffectsModule } from "@ngrx/effects";
import { MoviesEffects } from "./store/effects/movies.effects";
import { MoviesDataService } from "./services/movies-data.service";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { MoviesInterceptor } from "./movies.interceptor";
import { TitleFilterComponent } from "./components/title-filter.component";
import { FilterComponent } from "./containers/filter.component";
import { ListComponent } from "./containers/list.component";
import { MoviesListComponent } from "./components/movies-list.component";
import { SharedModule } from "src/app/shared/shared.module";
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';

@NgModule({
  declarations: [
    MoviesComponent,
    TitleFilterComponent,
    MoviesListComponent,
    FilterComponent,
    ListComponent,
    MovieCardComponent,
    MovieListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule, // creao nuova istanza in questo injector in modo da sovascrivere quello globale ed applicare l'interceptor
    RouterModule.forChild([
      {
        path: "",
        component: MoviesComponent
      }
    ]),
    StoreModule.forFeature(fromMovies.moviesFeatureKey, fromMovies.reducer),
    EffectsModule.forFeature([MoviesEffects]),
    SharedModule
  ],
  providers: [
    MoviesDataService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MoviesInterceptor,
      multi: true // aggiungo un'altra classe allo stesso token non sovrascrivo
    }
  ]
})
export class MoviesModule {}