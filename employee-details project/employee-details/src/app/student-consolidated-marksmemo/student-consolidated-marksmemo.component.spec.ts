import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentConsolidatedMarksmemoComponent } from './student-consolidated-marksmemo.component';

describe('StudentConsolidatedMarksmemoComponent', () => {
  let component: StudentConsolidatedMarksmemoComponent;
  let fixture: ComponentFixture<StudentConsolidatedMarksmemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentConsolidatedMarksmemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentConsolidatedMarksmemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
