import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { ModalComponent } from './modal/modal.component';
import { PoptartHolderComponent } from './poptart-holder/poptart-holder.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    ModalComponent,
    PoptartHolderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
