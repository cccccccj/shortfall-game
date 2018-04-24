import React from 'react';

export default class PS extends React.Component{
  render(){
    return(
      <div className='PS'>
          <div className='PS-table'>
              <PSTable
              data = {this.props.data}
              playerStyle = {this.props.playerStyle}/>
          </div>
      </div>
    )
  }
}
