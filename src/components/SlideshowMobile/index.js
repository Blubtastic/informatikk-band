import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  //const photo = require('../../images/slideshow/' + image);
  state = {
    activeSlide: 0,
    activeSlide2: 0
  }



  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      dots: false,
      //Get the index of the current image
      beforeChange: (current, next) => this.setState({ activeSlide: next }),
      afterChange: current => {this.setState({ activeSlide2: current }); this.props.updateIndex(current);}
    };

    //Must import the images. Creates a list of imported images.
    var imageUrls = [];
    for (let x = 0; x < this.props.images.length; x++){
      imageUrls.push(require('../../images/slideshow/' + this.props.images[x]))
    }

    return (
      <div>
        <Slider {...settings}>
          {imageUrls.map((imageUrls) =>
            <div key={imageUrls.toString()}> <img src={imageUrls} alt="slideshow"/> </div>
          )}
        </Slider>
      </div>
    );
  }

}
