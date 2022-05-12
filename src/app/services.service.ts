import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  configUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllCharacters() {
    return this.http.get(this.configUrl +'/character');
  }

  getEpisode(number: any) {
    return this.http.get(this.configUrl + '/episode/' + number);
  }

  getUbication(number: any) {
    return this.http.get(this.configUrl + '/location/' + number);
  }

  getDetailCharacter(number: any) {
    return this.http.get(this.configUrl + '/character/' + number);
  }

  paginator(page: number) {
    return this.http.get(this.configUrl + '/character/?page=' + page);
  }

  filterCharacter(character: any) {
    return this.http.get(this.configUrl + '/character/?name=' + character);
  }
}
