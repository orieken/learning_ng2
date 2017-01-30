/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ModalService } from './modal.service';
import { Modal } from "../../modal/modal.component";

describe('ModalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModalService]
    });
  });

  it('has 0 modals registered', inject([ModalService], (service: ModalService) => {
    expect(service.modals.length).toEqual(0);
  }));

  it('registering modal adds modal to modals', inject([ModalService], (service: ModalService) => {
    let modal = new Modal;
    service.register(modal);
    expect(service.modals.length).toEqual(1);
  }));

  it('find modal in modals', inject([ModalService], (service: ModalService) => {
    let modal = new Modal();
    modal.modalId = 'foo';
    service.register(modal);
    let secondModal = new Modal();
    secondModal.modalId = 'bar';
    service.register(secondModal);
    expect(service.modals.length).toEqual(2);
    expect(service['find'](modal.modalId).modalId).toEqual('foo');
  }));


  it('does not delete if modal is not in modals', inject([ModalService], (service: ModalService) => {
    let modal = new Modal();
    expect(service['deleteModal'](modal)).toBeFalsy();
  }));


  it('delete modal if it already exists', inject([ModalService], (service: ModalService) => {
    let modal = new Modal();
    modal.modalId = 'foo';
    service.modals.push(modal);
    expect(service.modals.length).toEqual(1);
    expect(service['deleteModal'](modal)).toBeTruthy();
    expect(service.modals.length).toEqual(0);
  }));

  it('does not allow registering existing modal', inject([ModalService], (service: ModalService) => {
    let modal = new Modal();
    modal.modalId = 'foo';
    service.modals.push(modal);
    expect(service.modals.length).toEqual(1);
    service.register(modal);
    expect(service.modals.length).toEqual(1);
  }));

  it('open sets isOpen true modal if model exists', inject([ModalService], (service: ModalService) => {
    let modal = new Modal();
    modal.modalId = 'foo';
    service.modals.push(modal);
    expect(modal.isOpen).toBeFalsy();
    service.open(modal.modalId);
    expect(modal.isOpen).toBeTruthy();
  }));

  it('open returns false if modal is not registered', inject([ModalService], (service: ModalService) => {
    expect(service.open('foo')).toBeFalsy();
  }));

  it('closes returns false if modal is not open', inject([ModalService], (service: ModalService) => {
    let modal = new Modal();
    modal.modalId = 'foo';
    expect(modal.isOpen).toBeFalsy();
    service.close(modal.modalId);
    expect(modal.isOpen).toBeFalsy();
  }));
});
