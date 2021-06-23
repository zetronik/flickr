import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent implements OnInit {
  @Output() input: EventEmitter<string> = new EventEmitter<string>()
  public findInput: string = ''

  constructor() { }

  public find() {
    this.input.emit(this.findInput)
  }

  ngOnInit(): void {
  }

}
