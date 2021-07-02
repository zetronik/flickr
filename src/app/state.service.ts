import { Injectable } from '@angular/core';
import {ajax} from 'rxjs/ajax'
import {map,} from 'rxjs/operators'
import {Observable,} from 'rxjs'
import {Photos} from './interface/photos'
import {Images, ImageSize} from './interface/images'
import {Info} from './interface/info'

const URL: string = 'https://api.flickr.com/services/rest/?'
const KEY: string = 'de793c2037366b1bd97009ec9635c9f3'
const FORMAT: string = 'format=json&nojsoncallback=1'

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() {}

  find(text: string, page: number = 1): Observable<Photos> {
    return ajax.getJSON(`${URL}method=flickr.photos.search&api_key=${KEY}&text=${text}&page=${page}&per_page=8&${FORMAT}`).pipe(
      map((res: any) => res.photos)
    )
  }

  getImageId(id: string): Observable<ImageSize[]> {
    return ajax.getJSON(`${URL}method=flickr.photos.getSizes&api_key=${KEY}&photo_id=${id}&${FORMAT}`).pipe(
      map((photos: any) => photos.sizes.size)
    )
  }

  getInfo(id: string): Observable<Info[]> {
    return ajax.getJSON(`${URL}method=flickr.photos.getInfo&api_key=${KEY}&photo_id=${id}&${FORMAT}`).pipe(
      map((info: any) => info.photo.tags.tag)
    )
  }
}
