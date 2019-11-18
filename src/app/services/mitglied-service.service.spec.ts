import { TestBed } from '@angular/core/testing';

import { MitgliedServiceService } from './mitglied-service.service';

describe('MitgliedServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MitgliedServiceService = TestBed.get(MitgliedServiceService);
    expect(service).toBeTruthy();
  });
});
