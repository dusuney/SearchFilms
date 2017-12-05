import { Component, OnInit } from "@angular/core";
import { FilmService } from "../film.service";
import { Router } from "@angular/router";
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: "view-film",
    templateUrl: "./viewFilm.component.html"
})

export class ViewFilmComponent {
    
    public id: any;
    public film:any;

    ngOnInit() {

        this.route.params.subscribe((params: ParamMap) => {
            this.id = params['id'];
        });

        this.filmService.getFilmById(this.id).then(film => this.film = film);
    }

    constructor(
        private filmService: FilmService,
        private route: ActivatedRoute,
        private router: Router) {
    }
    

    
} 