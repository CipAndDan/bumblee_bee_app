import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameBlockComponent } from './game-block/game-block.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LetterTracingComponent } from './letter-tracing/letter-tracing.component';
import { NumberTracingComponent } from './number-tracing/number-tracing.component';
import { AlphabetLearningComponent } from './alphabet-learning/alphabet-learning.component';
import { LetterPairsComponent } from './letter-pairs/letter-pairs.component';
import { SettingsComponent } from './settings/settings.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBlockComponent,
    NavbarComponent,
    LetterTracingComponent,
    NumberTracingComponent,
    AlphabetLearningComponent,
    LetterPairsComponent,
    SettingsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
