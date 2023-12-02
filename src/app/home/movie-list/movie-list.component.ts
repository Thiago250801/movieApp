import { Component } from '@angular/core';
import {Movie} from "../../interface/movie";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {

  constructor() {
  }
  movieList: Movie[] = [
    {
      title: 'Tenent',
      description:'Armed with only one word, Tenet, and fighting for the survival of the entire world, a\n' +
        'Protagonist journeys through a twilight world of international espionage on a mission that will unfold in\n' +
        'something beyond real time.',
      rating: 7.8,
      duration: new Date(0, 0, 0, 2, 30),
      genre: 'Action, Sci-Fi',
      releasedDate: new Date(2020,8,3),
      image: 'assets/Tenet.png',
      trailer: 'https://www.youtube.com/watch?v=LdOM0x0XDMo'
    },
    {
      title: 'Spider-Man: Into the Spider-Verse',
      description:'Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-\n' +
        'powered individuals from other dimensions to stop a threat for all realities.',
      rating: 8.4,
      duration: new Date(0,0,0,1,57),
      genre: 'Action, Animation, Adventure',
      releasedDate: new Date(2018,11,14),
      image: 'assets/SpiderMan.png',
      trailer: 'https://www.youtube.com/watch?v=tg52up16eq0'
    },
    {
      title: 'Kineves Out',
      description:'A detective investigates the death of a patriarch of an eccentric, combative family.',
      rating: 7.9,
      duration: new Date(0,0,0,2,10),
      genre: 'Comedy, Crime, Drama',
      releasedDate: new Date(2019,10,27),
      image: 'assets/KnivesOut.png',
      trailer: 'https://www.youtube.com/watch?v=qGqiHJTsRkQ'
    },
    {
      title: 'Guardians of the Galaxy',
      description:'A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to\n' +
        'purge the universe.',
      rating: 8.0,
      duration: new Date(0,0,0,2,1),
      genre: 'Action, Adventure, Comedy',
      releasedDate: new Date(2014,7,1),
      image: 'assets/GuardiansofTheGalaxy.png',
      trailer: 'https://www.youtube.com/watch?v=d96cjJhvlMA'
    },
    {
      title: 'Avengers: Age of Ultron',
      description:'When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program\n' +
        'called Ultron, things go horribly wrong and it\'s up to Earth\'s mightiest heroes to stop the villainous Ultron\n' +
        'from enacting his terrible plan.',
      rating: 7.3,
      duration: new Date(0,0,0,2,21),
      genre: 'Action, Adventure, Sci-Fi',
      releasedDate: new Date(2015,4,1),
      image: 'assets/Avengers.png',
      trailer: 'https://www.youtube.com/watch?v=tmeOjFno6Do'
    },

  ].map(movie => ({ ...movie, add: false }));

  addToWatchList(movie: Movie) {
    movie.add = true
  }

  removeFromWatchList(movie: Movie){
    movie.add = false
  }
}
