import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilmComponent } from "./film/film.component";
import { ViewFilmComponent } from "./viewFilm/viewFilm.component";

import { FilmService } from "./film.service";
import { FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    ViewFilmComponent,
    FilmComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [FilmService, appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
