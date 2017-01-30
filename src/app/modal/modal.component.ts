import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class Modal implements OnInit {

  @Input('modal-id') modalId: string;
  @Input('modal-title') modalTitle: string;
  isOpen: boolean = false;

  constructor() { }

  ngOnInit() {

  }

}
