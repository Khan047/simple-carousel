import React,{ Component } from 'react';


class Slide extends Component {
    
    render() {
        return (
          
          
          
           
            <div className="image-slide" ><img src={this.props.url} alt="list over" width="600" height="500"/></div>
    

          
        );
      }
  }
export default Slide;