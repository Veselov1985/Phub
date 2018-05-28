/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VrComponent } from './vr.component';

describe('VrComponent', () => {
  let component: VrComponent;
  let fixture: ComponentFixture<VrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
