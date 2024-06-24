import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName'
})

export class FilterByNamePipe implements PipeTransform {

  transform(artisans: any[], searchText: string): any[] {

    if (!artisans) {
      return [];
    }

    else if (!searchText) {
      return artisans;
    }

    searchText = searchText.toLowerCase();
    return artisans.filter(artisan => artisan.name.toLowerCase().includes(searchText)
    );

  }

}

