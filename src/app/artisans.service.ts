import { Injectable } from '@angular/core';
import  artisansData from '../assets/datas.json';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtisansService {
   artisans = artisansData;
   private artisanUrl: string = "../assets/datas.json"

  constructor(private https: HttpClient)  {}

      getArtisansByCategory(category: string) {
      return this.artisans.filter(artisan => artisan.category.toLowerCase() ===category.toLowerCase())
    };
      getArtisansById(id: string){
      return this.artisans.filter(artisan => artisan.id.toLowerCase() ===id.toLowerCase())
    }
    getArtisan(): Observable<any> {
      return this.https.get(this.artisanUrl)
    }
}


