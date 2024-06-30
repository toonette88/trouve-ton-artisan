import { Component, OnInit } from '@angular/core';
import { ArtisansService } from '../artisans.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit{
  artisans: any[] = [];
  search: string='';

 constructor(
  private route: ActivatedRoute, 
   private artisansServices: ArtisansService
) { }

 ngOnInit(): void {
    this.route.params.subscribe(params => {
    this.search = params['search'] || ""
    this.getArtisan()
  });
 }
getArtisan(){
  this.artisansServices.getArtisan().subscribe(
    (artisan) => {
      this.artisans = artisan
    })
}

}
