import React, {Component} from 'react'

import Slide from './slide.js';
import SimpleSlider from '../SlideshowMobile';

import previous from '../../images/leftIcon.png'
import next from '../../images/rightIcon.png'

export default class Slideshow extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: ['output.jpg', 'bendik.jpg', 'lars.png', 'martin.jpg', 'mathias.png'],
      indexes: [],
      //Lists must be same length as the images list.
      names: ["Tittel 1", "Tittel 1", "Tittel 1", "Tittel 1"],
      descriptions: ["Vi er kule", "Vi er rå", "vi er best", "vi er størst"],
      currentIndex: 0,
      mobile: false,
    }
    //Must bind the function to use state.
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    this.updateIndex = this.updateIndex.bind(this);
  }
  componentDidMount(){
    //Generate indexes for all images. This is necessary for the CSS styling (image transition)
    let indexes = [];
    for (let x = 0; x < this.state.images.length; x++){
      //Increase all indexes by 1 in order to start with the 1st image in center when loading the page.
      indexes[x] = x+1;
    }
    //Last index = 0
    indexes[this.state.images.length-1] = 0

    this.setState({ indexes: indexes });
  }



  //RENDER
  render() {
    return(
      <div className="section fillHeight" id="bilder">
        <div className="slideshowContainer row">
          <img onClick={this.previousSlide} src={previous} alt="change slide"/>
          <div className="slideContainer">
            {this.generateSlides()}
          </div>
          <img onClick={this.nextSlide} src={next} alt="change slide"/>
        </div>

        <div className="mobile mobileSlideshow ">
          <SimpleSlider images={this.state.images} updateIndex={this.updateIndex} />
        </div>

          {/*
          <div className="horizontalAlign">
            {this.generateCircles()}
          </div>
          <div className="textAlign narrowContainer sidePadding slideshowDescription">
            <h2 className="slideshowHeader">{this.state.names[this.state.currentIndex]}</h2>
            <p>{this.state.descriptions[this.state.currentIndex]}</p>
          </div>
          */}

      </div>
    )
  }

  updateIndex(newIndex){
    this.setState({ currentIndex: newIndex });
    this.changeSlide(newIndex)
  }
  //Generates the slideshow images (components)
  generateSlides(){
    let children = [];
    for (let x = 0; x < this.state.images.length; x++){
      children.push(<div className={'hidden image' + this.state.indexes[x]} key={x} onClick={() => this.changeSlide(x)}>  <Slide image={this.state.images[x]} />  </div>)
    }
    return children;
  }
  //Circle bar with selected image
  generateCircles(){
    let children = [];
    for (let x = 0; x < this.state.images.length; x++){
      children.push(
        <svg height="24" width="24" key={x} >
          <circle cx="12" cy="12" r="10" fill="none" className={'circle' + this.state.indexes[x]}/>
          <svg height="24" width="24" >
            <circle cx="12" cy="12" r="5.5" fill="none" stroke="#777" strokeWidth="1" />
          </svg>
        </svg>
      )
    }
    return children;
  }

  //Change slides by clicking on neighbor slides
  changeSlide(nextIndex){
    //For simplicity
    let endIndex = this.state.indexes.length -1;
    let currentIndex = this.state.currentIndex;

    if(nextIndex === currentIndex){
      return
    }else if(nextIndex > currentIndex && (nextIndex !== endIndex)){
      this.nextSlide();
    }
    else {
      if( (nextIndex === endIndex && currentIndex === endIndex-1) || ( nextIndex === 0 && currentIndex === endIndex) ){
        this.nextSlide();
      }else{
        this.previousSlide();
      }
    }
  }

  previousSlide(){
    //Keeps track of the current selected slite
    if (this.state.currentIndex > 0){
      this.setState({ currentIndex: this.state.currentIndex - 1 });
    }
    else{
      this.setState({ currentIndex: this.state.indexes.length -1 });
    }

    //Assigns new indexes to all images. Increase all by 1 to move left.
    for (let x = 0; x < this.state.indexes.length; x++){
      let newIndexes = this.state.indexes; //duplicate placeholder, this is edited
      if (this.state.indexes[x] < this.state.images.length - 1){
        newIndexes[x] = this.state.indexes[x] + 1
        this.setState({ indexes: newIndexes }); //State value copied from placeholder
      }
      else{
        newIndexes[x] = 0
        this.setState({indexes: newIndexes});
      }
    }
  }

  nextSlide(){
    //Keeps track of the current selected slite
    if (this.state.currentIndex < this.state.indexes.length -1){
      this.setState({ currentIndex: this.state.currentIndex + 1 });
    }
    else{
      this.setState({ currentIndex: 0 });
    }

    //Assigns new indexes to all images. Decrease all by 1 to move right.
    for (let x = 0; x < this.state.indexes.length; x++){
      let newIndexes = this.state.indexes; //duplicate placeholder, this is edited
      if (this.state.indexes[x] > 0){
        newIndexes[x] = this.state.indexes[x] - 1
        this.setState({ indexes: newIndexes});;
      }
      else{
        newIndexes[x] = this.state.images.length -1;
        this.setState({ indexes: newIndexes});
      }
    }
  }

}
