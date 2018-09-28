import { Component } from 'react';

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ value });
  }

  render() {
    return (
      <input value={this.state.value} onChange={e => this.handleChange(e)} />
    );
  }
}

export default TextInput;
