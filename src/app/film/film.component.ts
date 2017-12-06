import { Component, OnInit } from "@angular/core";
import { FilmService } from "../film.service";

@Component({
    selector: "film",
    templateUrl: "./film.component.html",
     styleUrls: ['./film.component.css']
})
export class FilmComponent {
    filmName:string = "";
    listFilms:any[] = [];
    searchedFilm:any;

    ngOnInit() {
        
    }

    searchFilm():void{
        this.filmService.getFilm(this.filmName).then(data => this.searchedFilm = data);
    }

    addToList(film:any):void{
        this.listFilms.push(film);
    }

    removeFromList(film):void{
        this.listFilms.splice(this.listFilms.indexOf(film),1);
    }

    constructor(private filmService: FilmService) { 
    }
} 