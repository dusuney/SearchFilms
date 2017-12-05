import { Routes, RouterModule } from "@angular/router";
import { FilmComponent } from "./film/film.component";
import { ViewFilmComponent } from "./viewFilm/viewFilm.component"; 

import { ModuleWithProviders } from "@angular/core";

const appRoutes: Routes = [
    { path: '', redirectTo: 'searchFilm', pathMatch: 'full' },
    
    { path: 'viewFilm/:id', component: ViewFilmComponent},
    { path: 'searchFilm', component: FilmComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
