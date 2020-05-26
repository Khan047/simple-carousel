import React,{ Component } from 'react';
import  Indicator  from "./Indicator";
import  Slide  from "./Slide";
import  LeftArrow  from "./LeftArrow";
import  RightArrow  from "./RightArrow";




class Carousel extends Component {
    constructor(props) {
      super(props);
  
      this.moveTo = this.moveTo.bind(this);
      this.backSlide = this.backSlide.bind(this);
      this.nextSlide = this.nextSlide.bind(this);
  
      this.state = {
        current: 0
      };
    }
  
    moveTo(index) {
      this.setState({
        current: index
      });
    }
  
    backSlide(e) {
      e.preventDefault();
  
      let index = this.state.current;
      let { slides } = this.props;
      //let slidesLength = slides.length;
  
      if (index < 1) {
        index = slides.length;
      }
  
      index--;
  
      this.setState({
        current: index
      });
    }
  
    nextSlide(e) {
      e.preventDefault();
  
      let index = this.state.current;
      let { slides } = this.props;
      
  
      if (index ===slides.length - 1) {
        index = -1;
      }
  
      index++;
  
      this.setState({
        current: index
      });
    }
  
    render() {
      return (
        <div className="items">
          <LeftArrow onClick={e => this.backSlide(e)} glyph="&#8592;" />
  
          <ul >
            
              <Slide  current={this.state.current} url={this.props.slides[this.state.current]} />
            
          </ul>
  
          <RightArrow onClick={e => this.nextSlide(e) }   glyph="&#8594;"/>
  
          <ul >
            {this.props.slides.map((slide, index) =>
              <Indicator
                key={index}
                index={index}
                current={this.state.current} 
                onClick={e => this.moveTo(index)}
                
              />
            )}
          </ul>
        </div>
      );
    }
  }

  export default Carousel;