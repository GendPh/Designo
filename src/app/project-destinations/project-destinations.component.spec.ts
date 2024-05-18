import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDestinationsComponent } from './project-destinations.component';

describe('ProjectDestinationsComponent', () => {
  let component: ProjectDestinationsComponent;
  let fixture: ComponentFixture<ProjectDestinationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectDestinationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectDestinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
