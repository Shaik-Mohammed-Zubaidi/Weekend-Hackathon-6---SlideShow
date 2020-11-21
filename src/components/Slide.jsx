import React from "react";

const Slide = (props) => {
  const { title, text } = props;
  return (
    <>
      <h1 data-testid="title">{title}</h1>
      <p data-testid="text">{text}</p>
    </>
  );
};

export default Slide;
