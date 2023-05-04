import { TestBed } from '@angular/core/testing';

import { MaybeGuard } from './maybe.guard';

describe('MaybeGuard', () => {
  let guard: MaybeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MaybeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
