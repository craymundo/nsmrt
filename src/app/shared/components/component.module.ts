import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FooterComponent,
    HeaderComponent,
    ModalComponent,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    ModalComponent,
  ]
})
export class ComponentModule { }
