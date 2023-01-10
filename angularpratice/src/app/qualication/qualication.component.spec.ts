import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualicationComponent } from './qualication.component';

describe('QualicationComponent', () => {
  let component: QualicationComponent;
  let fixture: ComponentFixture<QualicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
