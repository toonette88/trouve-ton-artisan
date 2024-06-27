import { PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { ArtisanPageComponent } from './artisan-page/artisan-page.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path: "category/:category", component: CategoryPageComponent},
  {path: "artisan/:id", component: ArtisanPageComponent},
  {path: "**", pathMatch:'full', component: Page404Component},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
