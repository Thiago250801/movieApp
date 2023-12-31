import { Injectable } from '@angular/core';
import {Movie} from "../interface/movie";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private watchlistSubject = new BehaviorSubject<Movie[]>([]);
  watchlist$: Observable<Movie[]> = this.watchlistSubject.asObservable();
  private watchlistKey = 'watchlist';
  private movieDetailKey = 'movieDetail'
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

    addToWatchlist(movie: Movie ): void {
    const watchlist: Movie[] = this.getWatchlist();
    movie.add = true
    watchlist.push(movie);
    this.updateWatchlist(watchlist);
  }

  removeFromWatchlist(movie: Movie ): void {
    let watchlist: Movie[] = this.getWatchlist();
    watchlist = watchlist.filter(item => item.id !== movie.id);
    this.updateWatchlist(watchlist);
  }

  private updateWatchlist(watchlist: Movie[]): void {
    this.watchlistSubject.next(watchlist);
    this.saveWatchlist(watchlist);
  }
  getMovieDetail(): Movie | null {
    const storedData = localStorage.getItem(this.movieDetailKey);
    return storedData ? JSON.parse(storedData) : null;
  }

  setMovieDetail(movie: Movie): void {
    localStorage.setItem(this.movieDetailKey, JSON.stringify(movie));
  }

  clearMovieDetail(): void {
    localStorage.removeItem(this.movieDetailKey);
  }

}

