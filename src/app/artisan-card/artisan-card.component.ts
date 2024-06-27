import { Component } from '@angular/core';
import { ArtisansService } from '../artisans.service';

@Component({
  selector: 'app-artisan-card',
  templateUrl:'./artisan-card.component.html',
  styleUrl: './artisan-card.component.scss'
})
export class ArtisanCardComponent {

//APPEL DU TABLEAU DES ARTISANS
artisans: any[] = [] ;
constructor(private artisansService: ArtisansService) {}

ngOnInit(): void {
  this.artisans = this.artisansService.artisans
}

// APPEL DES FILTRES
  searchText: string='';
}

