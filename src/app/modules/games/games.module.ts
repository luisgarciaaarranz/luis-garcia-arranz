import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { GamesComponent } from './page/games.component';
import { GamesRoutingModule } from './games-routing.module';
import { GameCardComponent } from "./components/game-card/game-card.component";

@NgModule({
  declarations: [
    GamesComponent, 
    
  ],
  imports: [
    GamesRoutingModule,
    GameCardComponent
],
})
export class GamesModule { }
