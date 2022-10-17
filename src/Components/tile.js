import React from 'react';
import {Modal} from './modal.js';
import './tile.css';
import Zoom from 'react-reveal/Zoom';


export class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {expand: false};


  }

  openTile = () => {
    this.setState({
      expand: true
    });

  }

  closeTile = () => {
    this.setState({
      expand: false
    });

  }


  render() {
    if (this.props.type === "Coming Soon") {
      return (
        <div className={`tile-nonexpandable col-lg-${this.props.len} col-md-12`}>
          <Zoom>
          <div className={` ${this.props.type}  tile-each-non `}>

              <span className="holder">{this.props.type}</span>
          </div>
          </Zoom>
        </div>
      );
    } else {
      return (

        <div className={`tile-expandable col-lg-${this.props.len}`}>
          <Zoom>
          <div className={` ${this.props.type}  tile-each `} onClick={this.openTile}>

              <span className="holder">{this.props.type}</span>
          </div>
          </Zoom>

          <Modal title={this.props.type} show={this.state.expand} handleClose={this.closeTile}>{this.props.body}
          </Modal>

        </div>

      );
    }
  }
}
