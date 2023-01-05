import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustompipeTestComponent } from './custompipe-test.component';

describe('CustompipeTestComponent', () => {
  let component: CustompipeTestComponent;
  let fixture: ComponentFixture<CustompipeTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustompipeTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustompipeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
