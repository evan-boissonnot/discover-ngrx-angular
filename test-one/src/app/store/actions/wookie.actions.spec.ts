import * as fromWookie from './wookie.actions';

describe('loadWookies', () => {
  it('should return an action', () => {
    expect(fromWookie.loadWookies().type).toBe('[Wookie] Load Wookies');
  });
});
