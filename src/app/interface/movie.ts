export interface Movie {
  id: number;
  title: string;
  description: string;
  rating: number;
  duration: Date;
  genre: string;
  releasedDate: Date;
  image: string;
  trailer: string;
  add?: boolean;
}
