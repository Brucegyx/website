import React from 'react';
import './grid.css';
import {Tile} from './tile';

export class Grid extends React.Component {
  constructor(props) {
    super(props);
  }


  createGrid = (size, data) => {
    const grid = [];
    for (var i = 1; i <= size; i++) {
      let colSelect = `column_${i}`;
      var rData = data[colSelect]; // data["column_#"]
      var row = this.createRow(size, rData);
      grid.push(<div className="r" key={i}>{row}</div>);
    }
    return <div className="squares">{grid}</div>
  }

  createRow = (rowLen, rowData) => {
    var spacing = 12 / rowLen- 1;
    var need = rowLen - rowData.length;

    if (need > 0) {
      for (var diff = need; diff > 0; diff--) {
        rowData.push({
            "id": rowLen*rowLen - diff + 1,
            "title": "Coming Soon",
            "content": ""
          });
      }
    }
    return rowData.map(item => (

      <Tile type={item["title"]} len={spacing} body={item["content"]} key={item["id"]}/>
      /*
      <div className="square col-lg-4" key={item["id"]}>
        <span>{item["title"]}</span>
      </div> */
    ));
  }

  render () {
    const size = this.props.size;
    const dt = this.props.data;
    return (

        this.createGrid(size, dt)

    );
  }
}
