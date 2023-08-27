import { Component, OnInit } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  
  activeSlides?: SlidesOutputData;
  getPassedData(data: SlidesOutputData) {
    this.activeSlides = data;
    console.log(this.activeSlides);
  }

  slidesStore = [
    {
      id: 1,
      src:'/assets/imagens/Imagem2.jpg',
      alt:'Side 1',
      title:'img 1'
    },
    {
      id: 2,
      src:'/assets/imagens/Imagem6.jpg',
      alt:'Side 2',
      title:'img 2'
    },
    {
      id: 3,
      src:'/assets/imagens/Imagem7.jpg',
      alt:'Side 3',
      title:'img 3'
    },
    {
      id: 4,
      src:'/assets/imagens/Imagem3.jpg',
      alt:'Side 4',
      title:'img 4'
    },
    {
      id: 4,
      src:'/assets/imagens/Imagem1.jpg',
      alt:'Side 5',
      title:'img 5'
    }
  ]
  
  constructor() { }
  customOptions: OwlOptions = {
    loop: true,
    dots: false,
    center: false,
    navSpeed: 1500,
    navText: ['', ''],
    nav: false,
    margin: 50,
    stagePadding: 0,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
    },
  }

  ngOnInit(): void {
    
  }
  

}
