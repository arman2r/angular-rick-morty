export interface character {
  created: string;
  episode: [];
  gender: string;
  id: number;
  image: string;
  location: location;
  name: string;
  origin: origin;
  species: string;
  status: string;
  type: string;
  url: string
}

export interface location {
name: string;
url: string
}

export interface origin {
name: string;
url: string
}
