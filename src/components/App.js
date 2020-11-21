import React, { Component, useState } from "react";
import "../styles/App.css";
import Slide from "./Slide";

const App = (props) => {
  const { slides } = props;
  const [curSlideNumber, setCurrentSlideNumber] = useState(0);

  function displayNextSlide() {
    const curSlideNumberCopy = curSlideNumber + 1;
    setCurrentSlideNumber(curSlideNumberCopy);
  }
  function displayPrevSlide() {
    const curSlideNumberCopy = curSlideNumber - 1;
    setCurrentSlideNumber(curSlideNumberCopy);
  }

  return (
    <>
      <Slide
        title={slides[curSlideNumber].title}
        text={slides[curSlideNumber].text}
      />
      <button
        onClick={displayPrevSlide}
        disabled={curSlideNumber === 0}
        data-testid="button-prev"
      >
        Prev
      </button>
      <button
        onClick={displayNextSlide}
        disabled={curSlideNumber === slides.length - 1}
        data-testid="button-next"
      >
        Next
      </button>
      <button
        onClick={() => setCurrentSlideNumber(0)}
        data-testid="button-restart"
        disabled={curSlideNumber === 0}
      >
        Restart
      </button>
    </>
  );
};

export default App;
