import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectareaMainComponent } from './projectarea-main.component';

describe('ProjectareaMainComponent', () => {
  let component: ProjectareaMainComponent;
  let fixture: ComponentFixture<ProjectareaMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectareaMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectareaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
