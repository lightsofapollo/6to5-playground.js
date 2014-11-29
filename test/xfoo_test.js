import { throws, Xfoo } from '../src/index'
import assert from 'assert'

suite('xfoo', () => {
  test('xfoo', () => {
    let klass = new Xfoo()
    assert(typeof klass == 'object')
  });

  test('throws', () => {
    throws()
  });
});
