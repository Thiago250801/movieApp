import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MovieDetailComponent} from "./feature/movie-detail/movie-detail.component";
import {WatchlistComponent} from "./whatchlistc/watchlist.component";
import {MovieListComponent} from "./home/movie-list/movie-list.component";

const routes: Routes = [
  {
    path: '', component: MovieListComponent
  },
  {
    path:'movie-detail', component: MovieDetailComponent},
  {
    path:'watchlist', component: WatchlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
