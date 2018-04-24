import React from 'react';
import Players from './Header/players.js';
import Rounds from './Header/rounds.js';

export default class Header extends React.Component {
    render(){
        let showPlayers,showRounds;
        if (this.props.page>2 && this.props.page<6){
          showPlayers = true;
        }else{
          showPlayers = false;
        }
        if (this.props.page>2){
          showRounds = true;
        }else{
          showRounds = false;
        }
        return(
            <div className='header'>
                {showPlayers &&
                  <div className = 'players' style = {{backgroundColor : this.props.player.color}}>
                     <Players playerName={this.props.player.playerName}/>
                  </div>
                }
                {showRounds &&
                  <div className = 'rounds'>
                    <Rounds roundTurn ={this.props.roundTurn}/>
                  </div>
                }
            </div>
        );
    }
}
