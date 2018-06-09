import { Component } from '@angular/core';

import { gtag } from '@angeeks/gtag';
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
    private gtag: Gtag,
    private fs: Fullscreen) {
    gtag.event('page_view', { loaded: true, project: '@angeeks/fullscreen' });
    data.repo.subscribe((r: any) => {
      this.title = r.full_name;
      this.desc = r.description;
    });
    data.readme.subscribe(r => {
      this.readme = r;
    });
  }

  fullscreen(el) {
    this.gtag.event('click', { fn: 'fullscreen' });
    this.fs.toggle(el);
    setTimeout(() => {
      this.full = this.fs.isFull;
    }, 100);
  }
}
