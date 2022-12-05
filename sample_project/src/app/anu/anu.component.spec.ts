import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuComponent } from './anu.component';

describe('AnuComponent', () => {
  let component: AnuComponent;
  let fixture: ComponentFixture<AnuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
