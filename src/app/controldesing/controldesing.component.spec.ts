/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ControldesingComponent } from './controldesing.component';

describe('ControldesingComponent', () => {
  let component: ControldesingComponent;
  let fixture: ComponentFixture<ControldesingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControldesingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControldesingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
