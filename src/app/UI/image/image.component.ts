import { Component, OnInit, Input } from '@angular/core';
import {StateService} from '../../state.service'
import {ImageSize} from '../../interface/images'
import {Info} from '../../interface/info'
import {StorageService} from '../../storage.service'

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input() id!: string;
  @Input() title!: string;
  public image: ImageSize[] = []
  public tags: Info[] = []
  public imageModal: boolean = false

  constructor(
    private stateService: StateService,
    public storageService: StorageService
  ) {}

  bookmarks() {
    this.storageService.set(this.id)
  }

  closeModal(event: boolean) {
    this.imageModal = event
  }

  ngOnInit(): void {
    this.stateService.getImageId(this.id).subscribe(image => this.image = image)
    this.stateService.getInfo(this.id).subscribe(tags => this.tags = tags)
  }

}
