import { Component } from '@angular/core';
import {ModalService} from "./services/modal/modal.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  private TEST_MODAL_ID: string;

  constructor(private modalService: ModalService) {
    this.TEST_MODAL_ID = 'someUniqueName';
  }

  openModal(modalId){
    this.modalService.open(modalId);
  }

  closeModal(modalId){
    this.modalService.close(modalId);
  }

  doTheThing(){
    console.log('did it');
  }
}
