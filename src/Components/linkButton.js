import React from 'react';
import './linkButton.css';
import Fade from 'react-reveal/Fade';

export class LinkButton extends React.Component {
  constructor(props) {
    super(props);
  }


  render () {
    return (
      <Fade bottom>
      <a href={this.props.link}>
        <span className="btn">{this.props.title}</span>
      </a>
      </Fade>
    )
  }
}
