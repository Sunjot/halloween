import React from 'react';
import ReactDOM from 'react-dom';

class RadioInput extends React.Component {

  render() {
    return (
        <div>
            <input type="radio" id={this.props.id} name={this.props.name} value={this.props.value} 
                onClick={(e) => this.props.pickRadio(e)} />
            <label htmlFor={this.props.id}>{this.props.value}</label>
        </div>
    )
  }
}

export default RadioInput;
