import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageHolderComponent } from './page-holder/page-holder.component';
import { FormsModule } from '@angular/forms';
import { InputFieldComponent } from './page-holder/input-field/input-field.component';
import { TaskItemComponent } from './page-holder/task-item/task-item.component';
@NgModule({
  declarations: [
    AppComponent,
    PageHolderComponent,
    InputFieldComponent,
    TaskItemComponent,
  ],
  imports: [BrowserModule, FormsModule],
  exports: [PageHolderComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
