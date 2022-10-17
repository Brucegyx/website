import React from 'react';
import './page.css';
import {Skill} from './skill.js';
// import anime from 'animejs';
import Fade from 'react-reveal/Fade';

export class Page extends React.Component {
  constructor (props){
    super(props);


  }

/*
  componentDidMount () {
    anime({
      targets: 'space',
      translateX: 100,
      delay: 3000
    });
  }*/
  buildList = (list) => {
    if (this.props.type === "addList"){
        return list.map(item => (
          <Fade left cascade duration={800} key={item.name}>
            <Skill item={item}/>
          </Fade>
        ))
      } else {return null}

  }

  render() {
    return (
      <div className="space ">
        <div className={`${this.props.name} inner-space`}>

          <div className="title">
            <h2 className="tl">{this.props.title}</h2>
          </div>

          <div className="body">
            <div className="row">
              <div className="column col-lg-8 col-md-12">
                <p id="content">{this.props.children}</p>
              </div>

              <div className="column-spacing col-lg-4 col-md-0">

              </div>
            </div>
          </div>
          <div className="list">

              {this.buildList(this.props.list)}

          </div>
        </div>

      </div>
    );
  }

}
