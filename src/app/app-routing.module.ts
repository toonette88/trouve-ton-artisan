import { PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { ArtisanPageComponent } from './artisan-page/artisan-page.component';
import { Page404Component } from './page404/page404.component';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';
import { DonneesPersonnellesComponent } from './donnees-personnelles/donnees-personnelles.component';
import { AccessibiliteComponent } from './accessibilite/accessibilite.component';
import { CookiesComponent } from './cookies/cookies.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path: "category/:category", component: CategoryPageComponent},
  {path: "artisan/:id", component: ArtisanPageComponent},
  {path: "mentionslegales", component:MentionsLegalesComponent},
  {path: "donneespersonnelles", component: DonneesPersonnellesComponent},
  {path: "accessibilite", component: AccessibiliteComponent},
  {path: "cookies", component: CookiesComponent},
  {path: "**", pathMatch:'full', component: Page404Component},
  {path: "search/:search", component: SearchComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
