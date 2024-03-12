import React, { useState, useEffect, useMemo } from "react";
import "./Swiper.css";
import slider1 from "../Images/Slider/slider1.jpg";
import slider2 from "../Images/Slider/slider2.jpg";
import slider3 from "../Images/Slider/slider3.jpg";
import slider4 from "../Images/Slider/slider4.jpg";
import slider5 from "../Images/Slider/slider5.jpeg";
import slider6 from "../Images/Slider/slider6.jpeg";
import slider7 from "../Images/Slider/slider7.jpeg";
import slider8 from "../Images/Slider/slider8.jpeg";
import slider9 from "../Images/Slider/slider9.jpg";
import slider10 from "../Images/Slider/slider10.jpg";
import "react-slideshow-image/dist/styles.css"

const Swiper = () => {
  const [imagesToo, setImagesToo] = useState([]);
  const images = useMemo(() => {
    return [ slider1 , slider2 , slider3 , slider4 , slider5 , slider6 , slider7 , slider8 , slider9 , slider10 ];
  }, []);
  useEffect(() => {
    const removeImage = (index) => {
      setImagesToo(images.filter((item) => item.index !== index));
    };
    removeImage(1);
  //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
    <div className="slide">
      <div className="media-content-outer">
      <div className="media-content">
        <h1>Our Media Content</h1>
        <hr/>
      </div>
      </div>
      <section className="wrapper">
        {
          //loop through images array and display each image
          images.map((image, index) => {
            return (
              <img
                src={image}
                key={index}
                alt="plant"
                className={"images" + index}
                style={{ width: 450, height: 500 }}
              />
            );
          })
        }
        {imagesToo.map((image, index) => {
          return (
            <img
              src={image}
              key={index}
              alt="plant"
              className={"images" + index}
              style={{ width: 330, height: 500 }}
            />
          );
        })}
      </section>
    </div>
   
    </>
  );
};

export default Swiper;
