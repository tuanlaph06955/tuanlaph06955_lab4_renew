import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerPDetailComponent } from './manager-p-detail.component';

describe('ManagerPDetailComponent', () => {
  let component: ManagerPDetailComponent;
  let fixture: ComponentFixture<ManagerPDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerPDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerPDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
