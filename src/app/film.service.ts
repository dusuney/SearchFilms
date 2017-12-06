import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class FilmService {
    
    constructor(private http: Http) { }

    private filmUrl = 'http://www.omdbapi.com/?s=';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    getFilm(name: string): Promise<any> {
        const url = `${this.filmUrl}${name}&apikey=BanMePls2`;

        return this.http.get(url)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    private filmIdUrl = 'http://www.omdbapi.com/?i=';
    getFilmById(id: string): Promise<any> {
        const url = `${this.filmIdUrl}${id}&apikey=BanMePls2`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}