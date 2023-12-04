import { Injectable } from '@angular/core';
import {Movie} from "../interface/movie";
import {BehaviorSubject, Observable} from "rxjs";
import {StorageService} from "./storage.service";

@Injectable({
  providedIn: 'root'
})
export class WatchlistStateService {

  constructor(private storageService: StorageService) { }

  getWatchlist() {
    return this.storageService.watchlist$;
  }
}
