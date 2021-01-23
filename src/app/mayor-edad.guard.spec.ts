import { TestBed } from '@angular/core/testing';

import { MayorEdadGuard } from './mayor-edad.guard';

describe('MayorEdadGuard', () => {
  let guard: MayorEdadGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MayorEdadGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
