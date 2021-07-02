import {Component, HostListener} from '@angular/core'
import {AuthService} from './auth.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public active: boolean = false
  public int: number = 0

  @HostListener('mousemove') safeMode() {
    localStorage.active = JSON.stringify(false)
    this.userActiveTimeout()
  }

  @HostListener('window:storage', ['$event']) storageActive(event: StorageEvent) {
    if (event.key === 'active') {
      this.active = JSON.parse(<string>event.newValue)
      if (this.active) {
        this.logout()
      }
    }
  }

  constructor(public authService: AuthService, private router: Router) {
    this.userActiveTimeout()
  }

  logout() {
    this.authService.logout()
    this.router.navigate(['/'])
  }

  userActiveTimeout() {
    clearInterval(this.int)
    if (!this.active && !!localStorage.uid) {
      this.int = setTimeout(() => {
        this.active = true
        this.logout()
        localStorage.active = JSON.stringify(true)
        clearTimeout(this.int)
      }, 1000*60*10)
    }
  }

}
