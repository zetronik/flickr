import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private state: string[] = []

  constructor() {
    this.state = JSON.parse(<string>localStorage.getItem('flickr'))
    window.addEventListener('storage', e => {
      if (e.key === 'flickr') {
        this.state = JSON.parse(<string>e.newValue)
      }
    })
    window.addEventListener('beforeunload', () => {
      localStorage.setItem('flickr', JSON.stringify(this.state))
    })
  }

  update() {
    localStorage.setItem('flickr', JSON.stringify(this.state))
  }

  get(): string[] {
    return this.state
  }

  set(id: string) {
    const idx: number = this.state.findIndex((flickrId: string) => flickrId === id)
    if (idx === -1) {
      this.state.push(id)
    } else {
      this.state.splice(idx, 1)
    }
    this.update()
  }
}
