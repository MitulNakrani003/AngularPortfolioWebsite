import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectareaRightComponent } from './projectarea-right.component';

describe('ProjectareaRightComponent', () => {
  let component: ProjectareaRightComponent;
  let fixture: ComponentFixture<ProjectareaRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectareaRightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectareaRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
