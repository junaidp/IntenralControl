/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TesterscreenComponent } from './testerscreen.component';

describe('TesterscreenComponent', () => {
  let component: TesterscreenComponent;
  let fixture: ComponentFixture<TesterscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesterscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesterscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
