import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StarshipsComponent } from './components/pages/starships/starships.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FilmsComponent } from './components/pages/films/films.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'films',
    component: FilmsComponent,
  },

  {
    path: 'starships',
    component: StarshipsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
