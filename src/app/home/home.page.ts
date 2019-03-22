import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideData:any = [];
  movieList:any = [];
    constructor(){
      this.slideData = [{ image: "../../assets/bhil.png" },
      { image: "../../assets/slide5.jpg" },
      { image: "../../assets/slide6.jpg" },
      { image: "../../assets/slide2.jpg" }, 
      { image: "../../assets/slide3.png" }];
  //     this.movieList = [{ image: "../../assets/movie3.jpg", name:'Sthree', rating:'80%' },
  // { image: "../../assets/movie.jpg", name:'TAKAREY', rating:'90%'  },
  // { image: "../../assets/movie1.jpg", name:'KGF', rating:'100%'  }, 
  // { image: "../../assets/movie3.jpg", name:'AQUAMAN', rating:'100%'  }
  // ];
    }
    slidesDidLoad(slides) {
      slides.startAutoplay();
    }
    slidesDidLoad1(mSlider){
      mSlider.startAutoplay();
    }
}
