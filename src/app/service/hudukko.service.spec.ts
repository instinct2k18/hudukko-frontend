import { TestBed } from '@angular/core/testing';

import { HudukkoService } from './hudukko.service';

describe('HudukkoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HudukkoService = TestBed.get(HudukkoService);
    expect(service).toBeTruthy();
  });
});
