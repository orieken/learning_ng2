import {Component, OnInit, Input} from '@angular/core';
import {ModalService} from "../services/modal/modal.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class Modal implements OnInit {

  @Input('modal-id') modalId: string;
  @Input('modal-title') modalTitle: string;
  isOpen: boolean = false;

  constructor(private modalService: ModalService) {
  }

  ngOnInit() {
    this.modalService.register(this);
  }

}
