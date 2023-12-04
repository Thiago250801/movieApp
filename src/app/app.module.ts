import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./core/header/header.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularMaterialModule} from "../shared/angular-material/angular-material.module";
import {MovieDetailComponent} from "./feature/movie-detail/movie-detail.component";
import {WatchlistComponent} from "./watchlist/watchlist.component";
import {MovieListComponent} from "./home/movie-list/movie-list.component";
import {StorageService} from "./service/storage.service";
import {FormsModule} from "@angular/forms";
import { SearchPipe } from './pipe/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieDetailComponent,
    WatchlistComponent,
    MovieListComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
