import React from 'react';
import './modal.css';
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
//import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
//import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import anime from 'animejs';


export class Modal extends React.Component{
  constructor(props) {
    super(props);

    this.state={
      currentIndex: 0
    }


    this.toggleModal = this.toggleModal.bind(this);
  }


  componentDidUpdate() {
    this.animate()
  }

  animate = () => {
    anime({
      targets:'.back',
      opacity: [0,1],
      duration: 300,
      easing: 'easeInOutSine'
    })

  }


    toggleModal (isShow) {
      if (isShow) {
        return "";
      } else {
        return "display-none";
      }
    }


  render () {

      return (
        <div className={`back ${this.toggleModal(this.props.show)}`}>
          <div className={`  modal `}>
            <div className="modal-close">
              <button id="close-button" type="button" onClick={this.props.handleClose}>Close</button>
            </div>

            <div className="row modal-body">
              <div className="col-lg-12">
                <div className="content-title row">
                  <div className="col-lg-12">
                    <h2 id="title">{this.props.title}</h2>
                  </div>
                </div>
                <div className="content-body row">
                  <div className="col-lg-9 col-md-12">
                    <p>{this.props.children}</p>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      );
    }

}
