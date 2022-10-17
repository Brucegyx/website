import React from 'react';
import './skill.css';
import anime from 'animejs';

export class Skill extends React.Component {
  constructor (props) {
    super(props);

    this.transform = this.transform.bind(this);
  }

  handleMouseEnter =  () => {
    anime({
      targets: `.sk-${this.props.item.num}`,
      scale: 1.2,
      easing: 'linear',
      duration: 300
    })
  }

  handleMouseLeave = () => {
    anime({
      targets: `.sk-${this.props.item.num}`,
      scale: 1,
      easing: 'linear',
      duration: 400
    })
  }

  transform = () => {
    var skillNumber = this.props.item.num;
    var familarity = this.props.item.level;
    var progFactor = 1;
    if (window.innerWidth > 400) {
      progFactor = 10;
    }
/*
    anime({
      targets: `.sk-${skillNumber}`,
      translateX: familarity,
      easing: 'easeInOutQuad',
      delay: anime.stagger(50)
    });*/
    anime({
      targets: `.fami-${skillNumber}`,
      opacity: [0.5,1],
      value: [0, familarity],
      round: 1,
      easing: 'easeInOutExpo'
    });
    anime({
      targets: `.bar-${skillNumber}`,
      width: progFactor*familarity,
      easing: 'easeInOutQuad',
      direction: 'right'
    });

  }
  render() {
    var num = this.props.item.num;
    return (
      <div className={`sk-container-${num} sk-contain`}>
        <div className={`sk-${num}`} id="sk-tab" key={this.props.item.name} onClick={this.transform}
          onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
          <span id="sk-name">{this.props.item.name}</span>
        </div>
        <span className={`pro-bar bar-${num}`}></span>
        <input className={`fami-${num}`} id="fa" value={`${this.props.item.level}%`} type="text" disabled ></input>

      </div>
    );
  }
}
