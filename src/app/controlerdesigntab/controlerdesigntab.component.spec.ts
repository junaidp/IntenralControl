/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ControlerdesigntabComponent } from './controlerdesigntab.component';

describe('ControlerdesigntabComponent', () => {
  let component: ControlerdesigntabComponent;
  let fixture: ComponentFixture<ControlerdesigntabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlerdesigntabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlerdesigntabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
