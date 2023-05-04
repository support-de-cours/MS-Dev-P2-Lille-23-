import { TestBed } from '@angular/core/testing';

import { SureToQuitGuard } from './sure-to-quit.guard';

describe('SureToQuitGuard', () => {
  let guard: SureToQuitGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SureToQuitGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
