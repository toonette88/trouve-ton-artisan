import { Component, OnInit } from '@angular/core';
import { ArtisansService } from '../artisans.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit{
  artisans: any[] = [];
  artisans1: any[] = [];
  artisans2: any[] = [];
  artisans3: any[] = [];
  search: string='';
  noArtisans: any;

 constructor(private route: ActivatedRoute, private artisansServices: ArtisansService, private router: Router) { }

 ngOnInit(): void {
   this.route.paramMap.subscribe(params => {
    this.search = params.get('search')!;
    this.artisans1 = this.artisansServices.getArtisansByLocation(this.search);
    this.artisans2 = this.artisansServices.getArtisansByName(this.search);
    this.artisans3 = this.artisansServices.getArtisansBySpecialty(this.search); 
    this.artisans = this.artisans1.concat(this.artisans2).concat(this.artisans3)
   });
 }
}
