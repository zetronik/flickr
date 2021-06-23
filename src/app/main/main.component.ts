import { Component, OnInit } from '@angular/core';
import {StateService} from '../state.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public data: any = {}

  constructor(private stateService: StateService) { }

  find(event: string) {
    if (event.length >= 3) {
      this.stateService.find(event).subscribe(data => this.data = data)
    }
  }

  ngOnInit(): void {
  }

}
