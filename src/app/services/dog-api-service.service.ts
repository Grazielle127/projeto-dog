import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Dog } from '../interfaces/dog';

@Injectable({
  providedIn: 'root'
})
export class DogApiServiceService {

  private apiUrl = 'https://dog.ceo/api/breeds/image/random';
  
  constructor(private http: HttpClient) { }

  getDog(): Observable<Dog> {
    return this.http.get<Dog>(this.apiUrl);
  }

}
