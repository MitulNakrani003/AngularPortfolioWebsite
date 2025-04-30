import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bodyarea2Component } from './bodyarea2.component';

describe('Bodyarea2Component', () => {
  let component: Bodyarea2Component;
  let fixture: ComponentFixture<Bodyarea2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bodyarea2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bodyarea2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
