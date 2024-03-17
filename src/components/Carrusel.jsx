import Carousel from 'react-bootstrap/Carousel';

import img1 from '../../public/assets/carrusel1.png';
import img2 from '../../public/assets/carrusel2.png';
import img3 from '../../public/assets/carrusel3.png';


function CarruselComponent() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarruselComponent;