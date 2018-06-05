# Fullscreen

A wrapper of `[screenfull](screenfull)` for Angular.

# Installation

```shell
npm i -P @angeeks/fullscreen
```

# Usage

```diff
// app.module.ts
+import { FullscreenModule } from '@angeeks/fullscreen';

@NgModule({
  imports: [
+   FullscreenModule
  ]
})
export class AppComponent {}

// trigger by service
// app.component.ts
import { Fullscreen } from '@angeeks/fullscreen';

class AppComponent {
- constructor() {}
+ constructor(private fullscreen: Fullscreen) {}

+ click(e) {
+   this.fullscreen.toggle(e.target);
+ }
}

// TODO: trigger by directive
```
