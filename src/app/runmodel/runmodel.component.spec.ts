import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunmodelComponent } from './runmodel.component';

describe('RunmodelComponent', () => {
  let component: RunmodelComponent;
  let fixture: ComponentFixture<RunmodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunmodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
