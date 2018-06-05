import { inject } from '@angular/core/testing';
import { ProviderSuite as Provider } from '@angeeks/testing';
import { fullscreen } from './fullscreen.lib';
import { Fullscreen as Subject } from './fullscreen';

const mockFs = {
  enabled: true,
  isFullscreen: false,
  toggle: () => {}
};

function mockFactory() {
  return mockFs;
}

Provider.suite<Subject>(Subject, (spec) => {
  spec.init({
    providers: [
      { provide: fullscreen, useFactory: mockFactory }
    ]
  });

  describe('.isFull', () => {
    beforeEach(() => {
      mockFs.isFullscreen = true;
    });
    it('will return value from fullscreen.isFullscreen', inject([Subject], (sub) => {
      expect(sub.isFull).toBeTruthy();
    }));
  });
  describe('.toggle(el)', () => {
    function describeEnable(en, { called }) {
      describe(`when fullscreen.enabled is ${en}`, () => {
        beforeEach(inject([Subject], (sub) => {
          mockFs.enabled = en;
          spyOn(mockFs, 'toggle').and.callThrough();
          sub.toggle();
        }));
        it(`should call mockFs.toggle ${called} times`, () => {
          expect(mockFs.toggle).toHaveBeenCalledTimes(called);
        });
      });
    }
    describeEnable(true, { called: 1 });
    describeEnable(false, { called: 0 });
  });
});
