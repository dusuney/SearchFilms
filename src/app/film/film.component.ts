import { Component, OnInit } from "@angular/core";
import { FilmService } from "../film.service";

@Component({
    selector: "film",
    templateUrl: "./film.component.html",
     styleUrls: ['./film.component.css']
})
export class FilmComponent {
    filmName:string = "";
    listFilms:any;
    searchedFilm:any;

    ngOnInit() {
        this.listFilms=JSON.parse(localStorage.getItem('film'));
        if(!this.listFilms){
            this.listFilms = [];
        }
    }

    searchFilm():void{
        this.filmService.getFilm(this.filmName).then(data => this.searchedFilm = data);
    }

    addToList(film:any):void{
        this.listFilms.push(film);
        localStorage.setItem('film', JSON.stringify(this.listFilms));
    }

    removeFromList(film):void{
        this.listFilms.splice(this.listFilms.indexOf(film),1);
        localStorage.setItem('film', JSON.stringify(this.listFilms));
    }

    constructor(private filmService: FilmService) { 
    }
} 