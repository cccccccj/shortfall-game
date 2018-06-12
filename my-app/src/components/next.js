import React from 'react';

export default class Next extends React.Component{
  handleChange(e){
    this.props.changePage();
  }
  render(){
    return(
          <div className='button next' onClick={this.handleChange.bind(this)}>
              Next
              <img src={'../svg/caret-right.svg'} className='icons' style={{width:'20%'}}/>
          </div>
    )
  }
}
