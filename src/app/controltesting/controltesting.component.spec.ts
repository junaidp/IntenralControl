/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ControltestingComponent } from './controltesting.component';

describe('ControltestingComponent', () => {
  let component: ControltestingComponent;
  let fixture: ComponentFixture<ControltestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControltestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControltestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
