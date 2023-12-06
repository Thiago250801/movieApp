import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
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
  videoUrl?: SafeResourceUrl;


  @ViewChild('exampleModal') modal: any;
  @ViewChild('videoIframe') videoIframe: ElementRef | undefined;
  constructor(
    private storageService: StorageService,
    private sanitizer: DomSanitizer
  ) {
  }

  ngOnInit(): void {
    this.movieDetail = this.storageService.getMovieDetail()
    this.extractVideoCode()
    this.videoUrl = this.getSafeUrl(this.videoCode)
    console.log(this.videoUrl)
    console.log(this.movieDetail?.duration)
  }

  formatDuration(): string {
    if (this.movieDetail?.duration) {
      const dateObject = new Date(this.movieDetail.duration);

      const hours = dateObject.getHours();
      const minutes = dateObject.getMinutes();

      // Adicione um zero à esquerda se for menor que 10
      const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

      return `${formattedHours}h:${formattedMinutes}min`;
    } else {
      return ''; // Ou outra mensagem de erro ou valor padrão, dependendo do seu caso
    }
  }

  private extractVideoCode(): void {
    const videoUrl = this.movieDetail?.trailer
    const match = videoUrl?.match(/(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);

    this.videoCode = match ? match[1] : null;
  }

  private getSafeUrl(videoCode: string | null): SafeResourceUrl {
    const url = `https://www.youtube.com/embed/${videoCode}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnDestroy() {
    this.storageService.clearMovieDetail()
  }



  closeModal() {
    if (this.videoIframe) {
      const iframe = this.videoIframe.nativeElement;

      // Obtenha a origem do iframe (URL do vídeo)
      const videoSrc = iframe.src;

      // Defina o src novamente para forçar a parada do vídeo
      iframe.src = videoSrc;
    }
  }

}
