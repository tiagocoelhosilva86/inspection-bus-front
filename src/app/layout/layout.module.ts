import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ModalAgendarConsultaModule } from '../components/modal-agendar-consulta/modal-agendar-consulta.module';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BodyComponent,
  ],
  imports: [
    CommonModule,
    ModalAgendarConsultaModule,
    CarouselModule,
  ],
  exports: [
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LayoutModule { }
