/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MaptbwithprocessComponent } from './maptbwithprocess.component';

describe('MaptbwithprocessComponent', () => {
  let component: MaptbwithprocessComponent;
  let fixture: ComponentFixture<MaptbwithprocessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaptbwithprocessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaptbwithprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
