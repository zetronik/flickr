import { Component, OnInit } from '@angular/core';
import {StateService} from '../state.service'
import {Photos} from '../interface/photos'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public inputSearch: string = ''
  public data: Photos | undefined;
  public page: number = 1

  constructor(private stateService: StateService) { }

  pagination(page: string) {
    if (page === 'prev') {
      this.page === 1 ? this.page = 1 : this.page--
    } else if (page === 'next') {
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
    }
  }

  ngOnInit(): void {
  }

}
