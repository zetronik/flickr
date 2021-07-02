import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core'
import {StateService} from '../../state.service'
import {ImageSize} from '../../interface/images'
import {Info} from '../../interface/info'
import {AuthService} from '../../auth.service'

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input() id!: string;
  @Input() key!: string;
  @Input() title?: string;

  @Output() action: EventEmitter<string> = new EventEmitter<string>()

  public image: ImageSize[] = []
  public tags: Info[] = []
  public imageModal: boolean = false

  constructor(
    private stateService: StateService,
    public authService: AuthService
  ) {}

  actionCard() {
    if (this.key) {
      this.action.emit(this.key)
    } else {
      this.action.emit(this.id)
    }
  }

  closeModal(event: boolean) {
    this.imageModal = event
  }

  ngOnInit(): void {
    this.stateService.getImageId(this.id).subscribe(image => this.image = image)
    this.stateService.getInfo(this.id).subscribe(tags => this.tags = tags)
  }

}
