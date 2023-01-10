import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeWebpageComponent } from './practice-webpage.component';

describe('PracticeWebpageComponent', () => {
  let component: PracticeWebpageComponent;
  let fixture: ComponentFixture<PracticeWebpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeWebpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeWebpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
