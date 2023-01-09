import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HijoComponent } from './hijo/hijo.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    HijoComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HijoComponent,
    HeaderComponent
  ]
})
export class ComponentsModule { }
