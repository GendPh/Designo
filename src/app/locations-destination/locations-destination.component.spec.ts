import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsDestinationComponent } from './locations-destination.component';

describe('LocationsDestinationComponent', () => {
  let component: LocationsDestinationComponent;
  let fixture: ComponentFixture<LocationsDestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationsDestinationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocationsDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
