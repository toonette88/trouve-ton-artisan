import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {EventPluginsModule} from '@tinkoff/ng-event-plugins';
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
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    EventPluginsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
