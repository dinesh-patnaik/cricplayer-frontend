import { TestBed } from '@angular/core/testing';

import { CricapiserviceService } from './cricapiservice.service';
import { HttpClientModule } from '@angular/common/http';

describe('CricapiserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should create Cricapiservice Service', () => {
    const service: CricapiserviceService = TestBed.get(CricapiserviceService);
    expect(service).toBeTruthy();
  });
});
