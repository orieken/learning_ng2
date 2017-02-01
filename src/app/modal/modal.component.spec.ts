/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {DebugElement, Component} from '@angular/core';

import { Modal } from './modal.component';
import {ModalService} from "../services/modal/modal.service";

@Component({
  template: `<app-modal modal-id='abc' modal-title='foo'></app-modal>`
})
class TestModalComponent {
}
class MockModalService {

}

describe('Modal', () => {
  let component: Modal;
  let fixture: ComponentFixture<Modal>;
  let testFixture: ComponentFixture<TestModalComponent>;
  let testModal: Element;
  let testModalAttributes: NamedNodeMap;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestModalComponent, Modal ],
      providers: [ ModalService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modal);
    component = fixture.componentInstance;
    fixture.detectChanges();
    testFixture = TestBed.createComponent(TestModalComponent);
    testFixture.detectChanges();
    testModal = testFixture.debugElement.nativeElement.querySelector('app-modal');
    testModalAttributes = testModal.attributes;
  });

  it('should have a modal-id', () => {
    expect(testModalAttributes.getNamedItem('modal-id').value).toEqual('abc')
  });

  it('should have a modal-title', () => {
    expect(testModalAttributes.getNamedItem('modal-title').value).toEqual('foo')
  });

  it('should not be open', () => {
    expect(component.isOpen).toBeDefined();
    expect(component.isOpen).toEqual(false);
  });

  it('registers to ModalServoce ngOnInit', () => {
    let modalService = fixture.debugElement.injector.get(ModalService);
    spyOn(modalService,'register');
    component.ngOnInit();
    expect(modalService.register).toHaveBeenCalled();
  });
});

