import React,{ Component } from 'react';


class LeftArrow extends Component {
    render() {
      return (
        <i className="arrow"
          
          
          onClick={this.props.onClick}
        >
          {this.props.glyph}
        </i>
      );
    }
  }
  export default LeftArrow;