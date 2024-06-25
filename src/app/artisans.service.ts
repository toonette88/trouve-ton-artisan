import { Injectable } from '@angular/core';
import  artisansData from '../assets/datas.json';

@Injectable({
  providedIn: 'root'
})
export class ArtisansService {
   artisans = artisansData;

  constructor()  {}
    getArtisansByCategory(category: string) {
      return this.artisans.filter(artisan => artisan.category.toLowerCase() ===category.toLowerCase())
    };
    getArtisansByName(name: string) {
      return this.artisans.filter(artisan => artisan.name.toLowerCase() ===name.toLowerCase())
    };
    getArtisansByLocation(location: string) {
      return this.artisans.filter(artisan => artisan.location.toLowerCase() ===location.toLowerCase())
    };
    getArtisansBySpecialty(specialty: string) {
      return this.artisans.filter(artisan => artisan.specialty.toLowerCase() ===specialty.toLowerCase())
    }
}


