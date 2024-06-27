import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FilterByNamePipe } from './filter-by-name.pipe';
import { ArtisanCardComponent } from './artisan-card/artisan-card.component';
import { ArtisanComponent } from './artisan/artisan.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { ArtisanPageComponent } from './artisan-page/artisan-page.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { Page404Component } from './page404/page404.component';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';
import { DonneesPersonnellesComponent } from './donnees-personnelles/donnees-personnelles.component';
import { AccessibiliteComponent } from './accessibilite/accessibilite.component';
import { CookiesComponent } from './cookies/cookies.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    FilterByNamePipe,
    ArtisanCardComponent,
    ArtisanComponent,
    CategoryPageComponent,
    StarRatingComponent,
    ArtisanPageComponent,
    ContactComponent,
    Page404Component,
    MentionsLegalesComponent,
    DonneesPersonnellesComponent,
    AccessibiliteComponent,
    CookiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
