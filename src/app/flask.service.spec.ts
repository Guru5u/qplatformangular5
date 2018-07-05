import { TestBed, inject } from '@angular/core/testing';

import { FlaskService } from './flask.service';

describe('FlaskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlaskService]
    });
  });

  it('should be created', inject([FlaskService], (service: FlaskService) => {
    expect(service).toBeTruthy();
  }));
});
