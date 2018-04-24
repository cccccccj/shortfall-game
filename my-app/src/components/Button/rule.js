import React from 'react';
import RulePanel from './rule_panel.js'


export default class Rule extends React.Component {
  constructor() {
      super();
      this.state = {
          show : false
      };
  }
  togglePopup(){
      this.setState({
          show : !this.state.show
      });
  }
  render(){
      return (
          <div>
              <button className="button" onClick={this.togglePopup.bind(this)}>
                  Rule
                  <img src={'../svg/info-circle.svg'} className='icons' style={{width:'25%'}}/>
              </button>
              <div>
                  {this.state.show ?
                      <RulePanel
                          closePopup={this.togglePopup.bind(this)}
                          page = {this.props.page}
                      />
                      : null
                  }
              </div>
          </div>
      )
  }
}
