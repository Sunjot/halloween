import React from 'react';
import ReactDOM from 'react-dom';
import TextInput from './TextInput';
import RadioInput from './RadioInput';

class Form extends React.Component {

  constructor() {
    super();
    this.state = {
      first: '',
      last: '',
      plusone: '',
      notes: '',
      showError: false,
      completed: false
    }
  }

  updateField = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  pickRadio = (e) => {
    this.setState({
      plusone: e.target.value
    });
  }

  submitRSVP = async () => {
    if (this.state.first.length > 1 && this.state.last.length > 1 && this.state.plusone.length > 1) {
      const res = await fetch('/api/rsvp', {
        method: 'POST',
        body: JSON.stringify({
          first: this.state.first, 
          last: this.state.last, 
          plusone: this.state.plusone,
          notes: this.state.notes
        }),
        headers: {"Content-Type": "application/json"}
      });

      if (res.status === 200) {
        this.props.setComplete(this.state.first);
      }
    }
    else {
      this.setState({
        showError: true
      });
    }
  }

  render() {
    return (
        <div id="app-wrap">
            <div id="title">Halloween Bash RSVP</div>
            <TextInput name="first" value={this.state.first} placeholder="First name" updateField={this.updateField} />
            <TextInput name="last" value={this.state.last} placeholder="Last name" updateField={this.updateField} />
            
            <div id="plusone">
                <div id="plusone-question">Are you bringing a guest?</div>
                <div id="radios">
                    <RadioInput id="Yes" name="plusone" value="Yes" pickRadio={this.pickRadio} />
                    <RadioInput id="No" name="plusone" value="No" pickRadio={this.pickRadio} />
                    <RadioInput id="Unknown" name="plusone" value="Unknown" pickRadio={this.pickRadio} />
                </div>
            </div>

            <textarea name="notes" rows="4" cols="50" value={this.state.notes} 
            onChange={(e) => this.updateField(e)}
            placeholder="Other notes (arriving early/late, who you're bringing, etc)"></textarea>
            
            <div id="button" onClick={() => this.submitRSVP()}>RSVP</div>
            {this.state.showError &&
                <div id="error">Form not completed!</div>
            }
      </div>
    )
  }
}

export default Form;
