import { Injectable } from '@angular/core';
import  artisansData from '../assets/datas.json';

@Injectable({
  providedIn: 'root'
})
export class ArtisansService {
   artisans = artisansData;

  constructor()  {}
  }

