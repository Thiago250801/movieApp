import {Component, OnDestroy, OnInit} from '@angular/core';
import {StorageService} from "../../service/storage.service";
import {Movie} from "../../interface/movie";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit, OnDestroy{
  movieDetail? : Movie | null
  videoCode: string | null = null;
  embedUrl: string | null = null;

  constructor(
    private storageService: StorageService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.movieDetail = this.storageService.getMovieDetail()
    this.extractVideoCode()
  }

  private extractVideoCode(): void {
    const videoUrl = this.movieDetail?.trailer
    const match = videoUrl?.match(/(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);

    this.videoCode = match ? match[1] : null;
    this.embedUrl = this.videoCode ? `https://www.youtube.com/embed/${this.videoCode}` : null;
    console.log(this.embedUrl)
  }

  ngOnDestroy() {
    this.storageService.clearMovieDetail()
  }



}
