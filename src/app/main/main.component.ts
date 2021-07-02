import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database'
import {StateService} from '../state.service'
import {Photos} from '../interface/photos'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public inputSearch: string = ''
  public data!: Photos;
  public page: number = 1

  constructor(private stateService: StateService, private db: AngularFireDatabase) { }

  push($event: any) {
    if (!!localStorage.uid) {
      this.db.list(localStorage.uid).push($event)
    }
  }

  pagination(page: string) {
    if (page === 'prev') {
      this.page === 1 ? this.page = 1 : this.page--
    }

    if (page === 'next' && this.page < this.data.pages) {
      this.page++
    }

    if (this.inputSearch) {
      this.stateService.find(this.inputSearch, this.page).subscribe(data => this.data = data)
    }
  }

  find(text: string) {
    if (text.length >= 3) {
      this.inputSearch = text
      this.stateService.find(text).subscribe(data => this.data = data)
      this.page = 1
    }
  }

  ngOnInit(): void {}

}
