import {Component, OnDestroy, OnInit} from '@angular/core';
import {StorageService} from "../../service/storage.service";
import {Movie} from "../../interface/movie";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit, OnDestroy{
  movieDetail? : Movie | null

  constructor(
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.movieDetail = this.storageService.getMovieDetail()
  }

  ngOnDestroy() {
    this.storageService.clearMovieDetail()
  }


}
