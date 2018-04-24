import React from 'react';

export default class Rounds extends React.Component{
    render(){
        return(
          <h2 style = {{textAlign: 'center'}}>Round {this.props.roundTurn}</h2>
        )
    }
}
