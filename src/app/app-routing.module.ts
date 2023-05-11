import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./components/pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'films',
    loadChildren: () =>
      import('./components/pages/films/films.module').then(
        (m) => m.FilmsModule
      ),
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./components/pages/search/search.module').then(
        (m) => m.SearchModule
      ),
  },
  {
    path: 'peoples',
    loadChildren: () =>
      import('./components/pages/peoples/peoples.module').then(
        (m) => m.PeoplesModule
      ),
  },
  {
    path: 'planets',
    loadChildren: () =>
      import('./components/pages/planets/planets.module').then(
        (m) => m.PlanetsModule
      ),
  },
  {
    path: 'starships',
    loadChildren: () =>
      import('./components/pages/starships/starships.module').then(
        (m) => m.StarshipsModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./components/pages/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
