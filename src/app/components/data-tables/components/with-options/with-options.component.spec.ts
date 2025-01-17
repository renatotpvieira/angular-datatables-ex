import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithOptionsComponent } from './with-options.component';

describe('WithOptionsComponent', () => {
  let component: WithOptionsComponent;
  let fixture: ComponentFixture<WithOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithOptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
