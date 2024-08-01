import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselComponent = () => {
  return (
    <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/1080/520?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      
        <img
          className="d-block w-100"
          src="https://picsum.photos/1080/520?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/1080/520?text=Third slide&bg=20232a"
          alt="Third slide"
        />
        <Carousel.Caption>
         <h3>Third slide</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;