import {Component, OnInit} from '@angular/core';
import {Movie} from "../interface/movie";
import {WatchlistStateService} from "../service/watchlist-state.service";


@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit{
  watchlist: Movie[] = [];

  constructor(
    private watchlistState: WatchlistStateService
  ) {
 }

 ngOnInit() {
    this.watchlistState.getWatchlist().subscribe(watchlist =>{
      this.watchlist = watchlist;
    })
 }

}
