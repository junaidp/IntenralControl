/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RiskidentificationComponent } from './riskidentification.component';

describe('RiskidentificationComponent', () => {
  let component: RiskidentificationComponent;
  let fixture: ComponentFixture<RiskidentificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskidentificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskidentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
