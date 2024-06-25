import { Component } from '@angular/core';
import { ArtisansService } from '../artisans.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  //APPEL DU TABLEAU DES ARTISANS
artisans: any[] = [];
constructor(private artisansService: ArtisansService) {}

ngOnInit(): void {
  this.artisans = this.artisansService.artisans
}

get artisansTop () {
  return this.artisans.filter(artisan => artisan.top)
}
}

