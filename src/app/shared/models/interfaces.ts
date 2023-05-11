export interface Film {
  title?: string;
  episode_id?: number;
  opening_crawl?: string;
  director?: string;
  characters?: string[];
  url?: string;
}
export interface FilmInfo {
  title:         string;
  episode_id:    number;
  opening_crawl: string;
  director:      string;
  producer:      string;
  release_date:  Date;
  characters:    string[];
  planets:       string[];
  starships:     string[];
  vehicles:      string[];
  species:       string[];
  created:       Date;
  edited:        Date;
  url:           string;
}

export interface Item {
  results: FilmInfo[];
}

export interface ApiResult{
  count:    number;
  results:  FilmInfo[];
}
