import { TestBed } from '@angular/core/testing';

import { InteractService } from './interact.service';
import { HttpClientModule } from '@angular/common/http';

describe('InteractService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should create Interact Service', () => {
    const service: InteractService = TestBed.get(InteractService);
    expect(service).toBeTruthy();
  });
});
