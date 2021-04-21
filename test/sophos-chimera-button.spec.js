import { fixture, assert } from "@open-wc/testing";
import '../sophos-chimera-button';

describe('Suite cases', () => {
  it('First Test', async () => {
      const _element = await fixture('<sophos-chimera-button></sophos-chimera-button>');
      _element.pictureSRC = mocks.pictureSRC;
      assert.strictEqual(_element.pictureSRC, mocks.pictureSRC);
  });
});