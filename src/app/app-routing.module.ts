import { SettingsComponent } from './settings/settings.component';
import { LetterPairsComponent } from './letter-pairs/letter-pairs.component';
import { AlphabetLearningComponent } from './alphabet-learning/alphabet-learning.component';
import { NumberTracingComponent } from './number-tracing/number-tracing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LetterTracingComponent } from './letter-tracing/letter-tracing.component';
import { HomeComponent } from './home/home.component';


// Build routes
const routes: Routes = [
  {path: 'letter-tracing', component: LetterTracingComponent},
  {path: 'number-tracing', component: NumberTracingComponent},
  {path: 'alphabet-learning', component: AlphabetLearningComponent},
  {path: 'letter-pairs', component: LetterPairsComponent},
  {path: 'settings', component: SettingsComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
