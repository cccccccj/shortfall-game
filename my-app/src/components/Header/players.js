import React from 'react';

export default class Players extends React.Component {
    render(){
        return(
          <h2 style = {{textAlign: 'center'}}>{this.props.playerName}</h2>
        );
    }
}
