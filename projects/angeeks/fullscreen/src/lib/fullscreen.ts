import { Injectable, Inject } from '@angular/core';
import { fullscreen, IFullscreen as IFS } from './fullscreen.lib';

@Injectable({
  providedIn: 'root'
})
export class Fullscreen {
  constructor(@Inject(fullscreen) private fs: IFS) { }
  get isFull() {
    return this.fs.isFullscreen;
  }
  toggle(el: HTMLElement) {
    if (this.fs.enabled) {
      this.fs.toggle(el);
    }
  }
}
