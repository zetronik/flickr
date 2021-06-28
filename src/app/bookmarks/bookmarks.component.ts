import {Component, HostListener, OnInit} from '@angular/core'
import {StateService} from '../state.service'
import {StorageService} from '../storage.service'

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

  constructor(public storageService: StorageService) {}

  ngOnInit(): void {}
}
