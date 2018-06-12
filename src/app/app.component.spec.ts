import { ComponentSuite as Component } from '@angeeks/testing';

import { GlobalsModule } from '@angeeks/globals';
import { GtagModule } from '@angeeks/gtag';
import { AppData } from './app.data';
import { AppData as MockAppData } from './testing/app.data';
import { AppComponent as Tag } from './app.component';

Component.suite(Tag, (spec) => {
  spec.init({
    imports: [
      GtagModule,
      GlobalsModule
    ],
    providers: [
      { provide: AppData, useClass: MockAppData }
    ]
  });
  spec.expectProperty('title', 'test');
});
