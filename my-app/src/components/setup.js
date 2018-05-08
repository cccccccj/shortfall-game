import React from 'react';

export default class Setup extends React.Component{
  handleChange(e){
    this.props.changePage();
  }
  render(){
    return(
      <div className='setup'>
        <div className='setup-header'>
          <div className='setup-logo'>
            SHORT<span style={{color:'#84CED7'}}>FALL</span>
          </div>
          <div className='setup-subtitle'>
            The Game of Environmental Automotive Supply Chain Management
          </div>
        </div>
        <div className='setup-title'>
          Setup
        </div>
        <div className='setup-middle'>
          <div className='setup-text'>
            Enter the game number your class is playing (between 1 and 1000):
          </div>
          <div className='setup-input'>
            <input className='setup-input-area' id='setup-input-number' defaultValue='0' type="number" min="0" max="1000">
            </input>
            <span style={{marginLeft: '2vw'}}>All teams must use the same game number!</span>
          </div>
          <div className='setup-text'>
            Enter the names of the people on your team:
          </div>
          <div className='setup-input'>
            <input className='setup-input-area' id='setup-input-name' type="text" >
            </input>
          </div>
          <div className='setup-text' id='setup-start' onClick={this.handleChange.bind(this)}>
            Start&nbsp;
            <img src={'../svg/right-icon.svg'} className='icons' style={{width:'5%'}}/>
          </div>
        </div>
      </div>
    )
  };
};
