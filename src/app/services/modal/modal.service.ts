import { Injectable } from '@angular/core';
import { Modal } from '../../modal/modal.component';

@Injectable()
export class ModalService {
  modals: Array<Modal>;

  constructor() {
    this.modals = [];
  }

  register(newModal: Modal) {
    let modal = this.find(newModal.modalId);
    if (modal) {
      this.deleteModal(newModal);
    }
    this.modals.push(newModal);
  }

  open(modalId: string): Boolean {
    let modal = this.find(modalId);
    if (modal) {
      modal.isOpen = true;
      return true;
    }
    return false;
  }

  close(modalId: string): Boolean {
    let modal = this.find(modalId);
    if (modal) {
      modal.isOpen = false;
      return false;
    }
    return true;
  }

  private find(modalId: string): Modal {
    for (let modal of this.modals) {
      if (modal.modalId === modalId) {
        return modal;
      }
    }
    return null
  }

  private deleteModal(modal: Modal): Boolean {
    let modalIndex = this.modals.indexOf(modal);
    if (modalIndex >= 0) {
      this.modals.splice(modalIndex);
      return true
    }
    return false
  }

}
