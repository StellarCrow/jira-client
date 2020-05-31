import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueDatesComponent } from './issue-dates.component';

describe('IssueDatesComponent', () => {
  let component: IssueDatesComponent;
  let fixture: ComponentFixture<IssueDatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueDatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
