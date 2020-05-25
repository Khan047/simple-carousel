import React,{ Component } from 'react';


class Indicator extends Component {
    render() {
       
        
      return (
         <div className="indis">
        <li>
                <i onClick={this.props.onClick}>{this.props.index === this.props.current
            ?  '✔'
            :  `x`} </i>
        </li>
        </div>
      );
    }
  }
export default Indicator;