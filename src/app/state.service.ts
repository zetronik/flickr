import { Injectable } from '@angular/core';
import {ajax} from 'rxjs/ajax'
import {map, mergeMap} from 'rxjs/operators'
import {Observable, Observer} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }

  find(text: string): Observable<any> {
    return ajax.getJSON(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=de793c2037366b1bd97009ec9635c9f3&text=${text}&per_page=10&format=json&nojsoncallback=1`).pipe(
      map((res: any) => res.photos)
    )
  }

  getImageId(id: number): Observable<any> {
    return ajax.getJSON(`https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=de793c2037366b1bd97009ec9635c9f3&photo_id=${id}&format=json&nojsoncallback=1`).pipe(
      map((photos: any) => photos.sizes.size)
    )
  }
}
