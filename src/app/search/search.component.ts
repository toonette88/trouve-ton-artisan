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
  search: string='';

 constructor(private route: ActivatedRoute, private artisansServices: ArtisansService, private router: Router) { }

 ngOnInit(): void {
   this.route.paramMap.subscribe(params => {
    this.search=params.get('search')!;
    this.artisans = this.artisansServices.getArtisansByLocation(this.search) || this.artisansServices.getArtisansByName(this.search) || this.artisansServices.getArtisansBySpecialty(this.search) ; 
   });
 }
}
