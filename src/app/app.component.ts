import {Component, HostListener} from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public active: boolean = false
  public int: number = 0

  @HostListener('mousemove') safeMode() {
    this.active = false
    localStorage.active = JSON.stringify(false)
    this.safeModeInterval()
  }

  @HostListener('window:storage', ['$event']) storageActive(event: StorageEvent) {
    if (event.key === 'active') {
      this.active = JSON.parse(<string>event.newValue)
    }
  }

  constructor() {
    this.safeModeInterval()
    if (!localStorage.flickr) {
      localStorage.flickr = JSON.stringify([])
    }
  }

  safeModeInterval() {
    clearInterval(this.int)
    if (!this.active) {
      this.int = setInterval(() => {
        this.active = true
        localStorage.active = JSON.stringify(true)
        clearInterval(this.int)
      }, 1000*60)
    }
  }

}
