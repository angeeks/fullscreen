# Fullscreen

[![Build Status](https://travis-ci.org/angeeks/fullscreen.svg?branch=master)](https://travis-ci.org/angeeks/fullscreen)
[![npm version](https://badge.fury.io/js/%40angeeks%2Ffullscreen.svg)](https://www.npmjs.com/package/@angeeks/fullscreen)

A wrapper of [screenfull](sindresorhus/screenfull.js) for Angular.

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
