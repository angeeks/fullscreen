import * as screenfull from 'screenfull';

export interface IFullscreen {
    enabled: boolean;
    isFullscreen: boolean;
    toggle: (el?: HTMLElement) => void;
    request?: (el?: HTMLElement) => void;
    exit?: () => void;
    onchange?: (fn: Function) => void;
    onerror?: (fn: Function) => void;
}

export function fullscreenFactory() {
    return screenfull;
}

import { InjectionToken } from '@angular/core';

export const fullscreen = new InjectionToken<any>('ngk-fullscreen', {
  providedIn: 'root',
  factory: fullscreenFactory
});
