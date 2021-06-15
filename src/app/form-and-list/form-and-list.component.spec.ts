import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAndListComponent } from './form-and-list.component';

describe('FormAndListComponent', () => {
  let component: FormAndListComponent;
  let fixture: ComponentFixture<FormAndListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAndListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAndListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
