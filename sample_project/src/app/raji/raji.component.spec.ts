import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RajiComponent } from './raji.component';

describe('RajiComponent', () => {
  let component: RajiComponent;
  let fixture: ComponentFixture<RajiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RajiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RajiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
