/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SimpleFormComponent } from './simple-form.component';

describe('SimpleFormComponent', () => {
  let component: SimpleFormComponent;
  let fixture: ComponentFixture<SimpleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('simple-form Works! message', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('simple-form');
  });

  it('gets textbox value on click', () => {
    expect(component.textBoxValue).toEqual('');
    let compiled = fixture.debugElement.nativeElement;
    let myInput = compiled.querySelector('#myInput');
    myInput.value = 'foo';
    myInput.dispatchEvent(new Event('input'));
    compiled.querySelector('button').click();
    fixture.detectChanges();
    expect(component.textBoxValue).toEqual('foo');
  });
});
