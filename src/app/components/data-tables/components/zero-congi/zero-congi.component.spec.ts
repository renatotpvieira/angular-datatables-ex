import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeroCongiComponent } from './zero-congi.component';

describe('ZeroCongiComponent', () => {
  let component: ZeroCongiComponent;
  let fixture: ComponentFixture<ZeroCongiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZeroCongiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZeroCongiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
