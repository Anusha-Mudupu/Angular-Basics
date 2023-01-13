import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEmployeelistComponent } from './delete-employeelist.component';

describe('DeleteEmployeelistComponent', () => {
  let component: DeleteEmployeelistComponent;
  let fixture: ComponentFixture<DeleteEmployeelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteEmployeelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteEmployeelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
