import { Injectable } from '@angular/core';
import {Movie} from "../interface/movie";
import {WatchlistStateService} from "./watchlist-state.service";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private watchlistSubject = new BehaviorSubject<Movie[]>([]);
  watchlist$: Observable<Movie[]> = this.watchlistSubject.asObservable();
  private watchlistKey = 'watchlist';
  constructor() {
    this.loadWatchlist();
  }

  private loadWatchlist(): void {
    const watchlistData: string | null = localStorage.getItem(this.watchlistKey);
    const watchlist: Movie[] = watchlistData ? JSON.parse(watchlistData) : [];
    this.watchlistSubject.next(watchlist);
  }
  private saveWatchlist(watchlist: Movie[]): void {
    localStorage.setItem(this.watchlistKey, JSON.stringify(watchlist));
  }

  getWatchlist(): Movie[] {
    return this.watchlistSubject.value;
  }

  addToWatchlist(movie: Movie): void {
    const watchlist: Movie[] = this.getWatchlist();
    watchlist.push(movie);
    this.updateWatchlist(watchlist);
  }

  removeFromWatchlist(movie: Movie): void {
    let watchlist: Movie[] = this.getWatchlist();
    watchlist = watchlist.filter(item => item.title !== movie.title);
    this.updateWatchlist(watchlist);
  }

  private updateWatchlist(watchlist: Movie[]): void {
    this.watchlistSubject.next(watchlist);
    this.saveWatchlist(watchlist);
  }
}

