import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {ImageSize} from '../../interface/images'
import {Info} from '../../interface/info'

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss']
})
export class ImageModalComponent implements OnInit {

  @Input() images: ImageSize[] = []
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>()
  public index: number = 0

  constructor() { }

  imageSize() {
    return this.images[this.index].source
  }

  ngOnInit(): void {
  }

}
