import { TestBed } from '@angular/core/testing';

import { BackendinteractService } from './backendinteract.service';
import { HttpClientModule } from '@angular/common/http';

describe('BackendinteractService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should create Backendinteract Service', () => {
    const service: BackendinteractService = TestBed.get(BackendinteractService);
    expect(service).toBeTruthy();
  });
});
