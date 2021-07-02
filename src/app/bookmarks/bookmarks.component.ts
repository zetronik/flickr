import {Component, OnInit} from '@angular/core'
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database'
import {map} from 'rxjs/operators'
import {Observable} from 'rxjs'
import {State} from '../interface/state'

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

  private itemsRef: AngularFireList<any> | undefined
  public items: Observable<State[]> | undefined

  constructor(private db: AngularFireDatabase) {
    if (!!localStorage.uid) {
      this.itemsRef = db.list(localStorage.uid)
      // @ts-ignore
      this.items = this.itemsRef.snapshotChanges().pipe(
        map(changes => changes.map(c => ({key: c.payload.key, id: c.payload.val()})))
      )
    }
  }

  remove(key: string) {
    this.itemsRef?.remove(key)
  }

  ngOnInit(): void {}
}
