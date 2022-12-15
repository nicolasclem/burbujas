import React, {useState} from "react";
import Carousel from "react-bootstrap/Carousel";


const SpacesCarousel = () => {

        const [index, setIndex] = useState(0);

        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        };

  const optionsImg = [
    {
      display: "spaces-img",
      alt: "Juegos",
    },
    {
      display: "foto3",
      alt: "Salon de Musica",
    },
    {
        display: "hero-img",
        alt: "Salon de Juegos",
    },
    {
      display: "foto5",
      alt: "Curso completo",
    },
   
  ];
  return (

    <Carousel activeIndex={index} onSelect={handleSelect}>
   
      {optionsImg.map((e, i) => (
        <Carousel.Item key={i}>
          <img
            className="w-100"
            src={`./assets/${e.display}.jpg`}
            alt={e.alt}
          />
          <Carousel.Caption>
            <h3>{e.alt}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default SpacesCarousel;
