import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
} from "mdbreact";
import {Link} from 'react-router-dom'

import "./CarouselPage.css"

const CarouselPage = () => {
  return (
    <MDBContainer >
      <MDBCarousel 
        activeItem={1}
        length={2}
        showControls={true}
        showIndicators={true}
        className="z-depth-1">
        <MDBCarouselInner className="carousel">
          <MDBCarouselItem itemId="1">
            <MDBView>
                <Link to="/category/produit/606921c54872ea33cc2e1cfd/606d02f59a7465218c9887cf">
                <img  
                  className="d-block w-100"
                  src="https://mk-media.mytek.tn/media/wysiwyg/slidershow/home-2/Slider-pc-dell-latitude-i5-10eme-generation.jpg"
                  alt="First slide"
                />
                </Link>
            </MDBView>
          </MDBCarouselItem>
          
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mk-media.mytek.tn/media/wysiwyg/banner/juin21/slider-pc-portable-asus-vivobook-6.jpg"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
          {/* <MDBCarouselItem itemId="4">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mk-media.mytek.tn/media/wysiwyg/banner/av21/slider-samsung-a52-a72.jpg"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem> */}
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};
export default CarouselPage;
