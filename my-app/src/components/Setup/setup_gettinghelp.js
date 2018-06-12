import React from 'react';

export default class Gettinghelp extends React.Component{
  render(){
    return(
      <div>
          <div className='setup-text setup-heading'>
              Scoring
          </div>
          <div className='setup-info'>
              <div className='setup-info-text'>
                <br/>
                Popup tutorial information will appear during the first round of the game.
                 This feature can be disabled by switch off the Tutorial button below.
                 You can re-enable the tutorial for the next turn phase by switching on the button again.
                 <br/>In addition, at any time during the game, you can bring up the RULES screen,
                 which offers detailed rules for the entire game.
                <hr></hr>
              </div>
          </div>
      </div>
    )
  }
}
