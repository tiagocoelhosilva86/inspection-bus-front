import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-agendar-consulta',
  templateUrl: './modal-agendar-consulta.component.html',
  styleUrls: ['./modal-agendar-consulta.component.scss']
})
export class ModalAgendarConsultaComponent implements OnInit {

  
  onClosemodal: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  sair() {
    this.onClosemodal = false;
  }
}
