import React,{ Component } from 'react';


class RightArrow extends Component {
    render() {
      return (
        <i className="right"  onClick={this.props.onClick} >
         {this.props.glyph}
        </i>
      );
    }
  }
export default RightArrow;
  