import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {NgnewApp} from '../app/ngnew';

beforeEachProviders(() => [NgnewApp]);

describe('App: Ngnew', () => {
  it('should have the `defaultMeaning` as 42', inject([NgnewApp], (app: NgnewApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([NgnewApp], (app: NgnewApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

