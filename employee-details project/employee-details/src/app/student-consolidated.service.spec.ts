import { TestBed } from '@angular/core/testing';

import { StudentConsolidatedService } from './student-consolidated.service';

describe('StudentConsolidatedService', () => {
  let service: StudentConsolidatedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentConsolidatedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
