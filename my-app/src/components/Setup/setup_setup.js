import React from 'react';

export default class SetupComp extends React.Component{
  render(){
    return(
      <div>
          <div className='setup-text'>
              Enter the game number your class is playing (between 1 and 1000):
          </div>
          <div className='setup-input' style={{justifyContent:'center'}}>
              <input className='setup-input-area setup-input-number'
              defaultValue='0' type="number" min="0" max="999" maxlength = "3">
              </input>
              <span style={{marginLeft: '2vw'}}>All teams must use the same game number!</span>
          </div>
          <div className='setup-text'>
              Enter the names of the people on your team (each one can select 1/2 roles):
          </div>
          <div className='setup-input'  style={{justifyContent:'space-around'}}>
              <div className='setup-input-area setup-input-names' id='setup-input-name1'>
                  Car Producer<br/>OME
                  <input className='setup-input-name' type="text">
                  </input>
                  <input className='setup-input-name' type="text">
                  </input>
                  <input className='setup-input-name' type="text">
                  </input>
              </div>
              <div className='setup-input-area setup-input-names' id='setup-input-name2'>
                  Parts Producer<br/>1st Tier
                  <input className='setup-input-name' type="text">
                  </input>
                  <input className='setup-input-name' type="text">
                  </input>
                  <input className='setup-input-name' type="text">
                  </input>
              </div>
              <div className='setup-input-area setup-input-names' id='setup-input-name3'>
                  Marerials Producer<br/>2nd Tier
                  <input className='setup-input-name' type="text">
                  </input>
                  <input className='setup-input-name' type="text">
                  </input>
                  <input className='setup-input-name' type="text">
                  </input>
              </div>
          </div>
      </div>
    )
  }
}
