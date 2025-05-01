import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectareaLeftComponent } from './projectarea-left.component';

describe('ProjectareaLeftComponent', () => {
  let component: ProjectareaLeftComponent;
  let fixture: ComponentFixture<ProjectareaLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectareaLeftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectareaLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
