import { ComponentSuite as Component } from '@angeeks/testing';
import { AppComponent as Tag } from './app.component';

Component.suite(Tag, (spec) => {
  spec.init();
  spec.expectProperty('title', 'ngk');
});
