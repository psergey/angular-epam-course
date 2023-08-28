import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  standalone: true
})
export class OrderByPipe implements PipeTransform {

  transform(data: any[] | null, key: string, sortOrder: boolean = false): any[] | null {
    if (data == undefined)
      return data;
    
    const result = data.sort((first, second) => {
      if (!(key in first) || !(key in second))
        return 0;
      
      const order = first[key] > second[key]
         ? 1 
         : first[key] < second[key] ? -1 : 0
      return !sortOrder ? order * -1 : order;
    });
   
    return result;
  }
}
