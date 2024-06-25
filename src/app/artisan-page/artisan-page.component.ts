import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtisansService } from '../artisans.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artisan-page',
  templateUrl: './artisan-page.component.html',
  styleUrl: './artisan-page.component.scss'
})
export class ArtisanPageComponent implements OnInit{
  artisan: any;
  id: string = "0";

  constructor(private route: ActivatedRoute, private artisansServices: ArtisansService, private router: Router) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe( params => {
      this.id = params.get('id')!;
      this.artisan= this.artisan.getArtisansById(this.id);
    })
  }
}


