import { Component, OnInit, Input } from '@angular/core';
import {StateService} from '../state.service'

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input() id!: number;
  public image: any[] = []
  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.stateService.getImageId(this.id).subscribe(image => this.image = image)
  }

}
