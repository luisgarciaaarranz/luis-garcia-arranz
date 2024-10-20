import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeInARowComponent } from './three-in-a-row.component';

describe('ThreeInARowComponent', () => {
  let component: ThreeInARowComponent;
  let fixture: ComponentFixture<ThreeInARowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreeInARowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeInARowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
