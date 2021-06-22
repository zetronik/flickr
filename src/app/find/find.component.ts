import { Component, OnInit } from '@angular/core';
import {StateService} from '../state.service'

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent implements OnInit {
  public findInput: string = ''
  public data: any = {}
  constructor(private stateService: StateService) { }

  public find() {
    this.stateService.find(this.findInput).subscribe(data => this.data = data)
  }

  ngOnInit(): void {
  }

}
