import React from 'react';
import PSRow from './PS/ps_row.js';

export default class PS extends React.Component{
  render(){
    const PSrows = [];
    this.props.data.forEach((row,index) => {
        PSrows.push(
        <PSRow
        row={row}
        playerStyle={this.props.playerStyle}
        index={index} />
        );
    });
    return(
      <div className='PS'>
        {PSrows}
      </div>
    )
  }
}
