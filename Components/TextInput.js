import React from 'react';
import ReactDOM from 'react-dom';

class TextInput extends React.Component {

  render() {
    return (
        <input type="text" name={this.props.name} value={this.props.value} placeholder={this.props.placeholder}
            onChange={(e) => this.props.updateField(e)}>
        </input>
    )
  }
}

export default TextInput;
