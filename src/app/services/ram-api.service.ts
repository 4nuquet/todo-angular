import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RamApiService {
  private env = this.environment.RickAndMorty;

  constructor(
    private httpClient: HttpClient,
    @Inject('environment') private readonly environment: Environment
  ) {}

  getAllCharacters() {
    return this.httpClient.get(this.env);
  }

  getSingleCharacter(id: any) {
    return this.httpClient.get(`${this.env}/${id}`);
  }
}

export interface Environment {
  production: boolean;
  RickAndMorty: string;
}
