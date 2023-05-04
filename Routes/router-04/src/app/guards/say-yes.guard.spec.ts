import { TestBed } from '@angular/core/testing';

import { SayYesGuard } from './say-yes.guard';

describe('SayYesGuard', () => {
  let guard: SayYesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SayYesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
