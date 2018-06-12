import React from 'react';
import SetupComp from './Setup/setup_setup.js';
import Scoring from './Setup/setup_scoring.js';
import Gettinghelp from './Setup/setup_gettinghelp.js';

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
            {!(this.props.page === 0) ? "Instructions" : "Setup"}
        </div>
        <div className='setup-middle'>
            {(this.props.page === 0) && <SetupComp/>}
            {(this.props.page === 1) && <Scoring/>}
            {(this.props.page === 2) && <Gettinghelp/>}
            <div id='setup-start' onClick={this.handleChange.bind(this)}>
                {!(this.props.page === 2) ? "Next" : "Start"}
                &nbsp;
                <img src={'../svg/right-icon.svg'} className='icons' style={{width:'3%'}}/>
            </div>
        </div>
      </div>
    )
  };
};
