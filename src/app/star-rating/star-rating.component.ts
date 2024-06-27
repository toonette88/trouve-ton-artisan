import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss'
})
export class StarRatingComponent {
  @Input() rating: number = 0;
  starArray: any[] = [];

  get stars() {
    console.log(this.starArray.length);
    return this.starArray = Array(Math.floor(this.rating));
    console.log(this.starArray.length);
  }


}
