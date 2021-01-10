import React, { Component } from 'react';

const ImageSlide = ({ url }) => {
    const styles = {
      backgroundImage: `url(${url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };
  
    return (
      <div className="image-slide" style={styles}>
          <img src={url} alt={"image not found right now"}></img>
      </div>
    );
  }

  // const imgUrls = ["data:image/jpeg;base64,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", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/inspirational-quotes-dr-seuss-1562000222.png"];

const imgUrls = [
	"https://cmeimg-a.akamaihd.net/640/clsd/getty/c64f76dc20c246ca88ee180fe4b4b781", 
	"https://lh3.googleusercontent.com/oxPeODS2m6rYIVbhcQChRtOWEYeGDwbeeeB1cDU2o_WYAVPU61VIgx-_6BAh5gSL8Sw=h900",
	"https://i0.wp.com/www.universodegatos.com/wp-content/uploads/2017/04/fivfelv7.jpg?resize=582%2C328",
	"https://i.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg",
	"https://ehealthforum.com/health/images/avatars/11699147425707699031013.jpeg"
];

export class Carousel extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      currentImageIndex: 0
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }
  previousSlide () {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide () {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  }
    render () {
      return (
          <div>
        <div className="carousel">Hey There !! From Carasoul Component.</div>
        <Arrow
          direction="left"
          clickFunction={ this.previousSlide }
          glyph="&#9664;" />
        <ImageSlide url={ imgUrls[this.state.currentImageIndex] } />
        <Arrow
          direction="right"
          clickFunction={ this.nextSlide }
          glyph="&#9654;" />
        </div>
      );
    }
  }

  const Arrow = ({ direction, clickFunction, glyph }) => (
  <div
    className={ `slide-arrow ${direction}` }
    onClick={ clickFunction }>
    { glyph }
  </div>
);