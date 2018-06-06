import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      characters: 0
    };
  }

  handleChange = e =>{

    this.setState({
      characters: e.currentTarget.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange} />
        <p>{this.props.maxChars - this.state.characters}</p>
      </div>
    );
  }
}

export default TwitterMessage;
