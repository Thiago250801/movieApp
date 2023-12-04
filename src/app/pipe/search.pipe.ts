import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchTerm: string): any[] {
    if (!items || !searchTerm) {
      return items;
    }

    const lowerSearchTerm = searchTerm.toLowerCase().trim();

    return items.filter(item =>
      item.title.toLowerCase().includes(lowerSearchTerm)
    );
  }

}
