import React from 'react';
import Rule from './Button/rule.js';

export default class Buttons extends React.Component{
  handleChange(e){
    this.props.changePage();
  }
  render(){
    console.log(this.props.page);
    return(
      <div className='buttons'>    
          <div className='button' onClick={this.handleChange.bind(this)}>
              Next
              <img src={'../svg/caret-right.svg'} className='icons' style={{width:'20%'}}/>
          </div>
          <Rule page = {this.props.page}/>
      </div>
    )
  }
}
