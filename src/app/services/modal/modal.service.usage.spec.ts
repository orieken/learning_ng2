// import {TestBed, ComponentFixture} from "@angular/core/testing";
// import { ModalService } from "./modal.service";
// import { Component } from "@angular/core";
// import {Modal} from "../../modal/modal.component";
//
// //
// @Component({
//   template: `<button id="modal-button" (click)="modalService.open(TEST_MODAL_ID)">Open Modal</button>
// <app-modal modal-title="Catchy Title Here" blocking="true" modal-id="{{ TEST_MODAL_ID }}">
//     <div class="center">Are you sure about this?</div>
//     <div class="buttons">
//         <button class="flat" (click)="doTheThing()">Yes</button>
//         <button (click)="modalService.close(TEST_MODAL_ID)">No</button>
//     </div>
// </app-modal>`
// })
// class TestModal {
//   private TEST_MODAL_ID: string;
//
//   constructor(private modalService: ModalService) {
//     this.TEST_MODAL_ID = 'someUniqueName';
//   }
// }
//
// describe('ModalService: Usage', () => {
//   let fixture: ComponentFixture<TestModal>;
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [ TestModal, Modal ],
//       providers: [ ModalService ]
//     })
//       .compileComponents();
//   });
//
//   it('creates modal', () => {
//     fixture = TestBed.createComponent(TestModal);
//     let button = fixture.nativeElement.querySelector('#modal-button');
//     button.dispatchEvent(new Event('click'));
//     fixture.detectChanges();
//     console.log(fixture.componentInstance);
//     console.log(fixture.nativeElement);
//   })
//
// });
