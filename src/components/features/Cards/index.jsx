import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div style={this.props.style} className={this.props.className}>
        {this.props.children}
      </div>
    );
  }
}

export default Card;
