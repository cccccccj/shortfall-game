import React from 'react';
import RuleContent from './rule_content.js';

export default class RulePanel extends React.Component{
  render() {
    return (
      <div className='popup'>
        <div className='rules'>
            <button id= 'close-icon' onClick={this.props.closePopup}>
                &#10005;
            </button>
            <RuleContent page = {this.props.page}/>
        </div>
      </div>
    )
  }
}
