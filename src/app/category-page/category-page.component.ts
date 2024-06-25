import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtisansService } from '../artisans.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.scss'
})
export class CategoryPageComponent  implements OnInit{
  artisans: any[] = [];
  category: string='';

  constructor(private route: ActivatedRoute, private artisansServices: ArtisansService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category')!;
      this.artisans = this.artisansServices.getArtisansByCategory(this.category);
    });
  }
}
