import { Component } from '@angular/core';

import { Fullscreen } from '@angeeks/fullscreen';
import { AppData } from './app.data';

@Component({
  selector: 'ngk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';
  desc = '';
  readme = '';
  full = false;
  constructor(private data: AppData,
    private fs: Fullscreen) {
    data.repo.subscribe((r: any) => {
      this.title = r.full_name;
      this.desc = r.description;
    });
    data.readme.subscribe(r => {
      this.readme = r;
    });
  }

  fullscreen(el) {
    this.fs.toggle(el);
    setTimeout(() => {
      this.full = this.fs.isFull;
    }, 100);
  }
}
