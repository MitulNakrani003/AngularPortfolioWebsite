import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyareaMainComponent } from './bodyarea-main.component';

describe('BodyareaMainComponent', () => {
  let component: BodyareaMainComponent;
  let fixture: ComponentFixture<BodyareaMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyareaMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyareaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
