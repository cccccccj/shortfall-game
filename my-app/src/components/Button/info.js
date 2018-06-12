import React from 'react';
import RulePanel from './rule_panel.js'


export default class Info extends React.Component {
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
  switchClassname(){
      return (this.props.page === 0||this.props.page ===1||this.props.page ===2)
       ? "button info info_hover1" :"button info info_hover2"
  }
  render(){
    console.log(!(this.props.page === 0||this.props.page ===1||this.props.page ===2));
    console.log(this.props.page);
      return (
          <div>
              <button className={this.switchClassname()} >
                <div className="info_item">
                  Statistics
                </div>
                <div className="info_item">
                  Tutorial
                </div>
                <div className="info_item" onClick={this.togglePopup.bind(this)}>
                  Rule
                </div>
                <img src={'../svg/info-circle.svg'} className='icons' style={{width:'6%'}}/>
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
