import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <p>
      simple-form Works!
    </p>
    <div>
    <input id="myInput" #myInput type="text"/>
    <button id="click-me" (click)="onClick(myInput.value)">Click me!</button>
    <div id="input-value">{{ textBoxValue }}</div>
    </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {
  textBoxValue = '';

  onClick(value) {
    this.textBoxValue = value;
  }

  constructor() { }

  ngOnInit() {
  }

}
