import { TestBed } from '@angular/core/testing';

import { SayNoGuard } from './say-no.guard';

describe('SayNoGuard', () => {
  let guard: SayNoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SayNoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
