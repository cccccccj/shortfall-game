import React from 'react';
import {rulesData} from '../../data/data.js'

export default class RuleContent extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
          show : this.props.page
      };
  }
  styleMenu(index){
      return index === this.state.show ? "active-tab tab" :"tab"
  };
  renderContent(){
      var items = rulesData[this.state.show].content;
      var changed = items.replace(/\n/g, <br />);
      return changed;
  };
  render(){
      const lists = [];
      rulesData.forEach((list,index) =>{
          lists.push(<li
                          onClick={()=>{
                              this.setState({show:index})}}
                          className = {this.styleMenu(index)}
                     >
                      {list.title}
                     </li>
                    )
      });
      return(
          <div>
              <div className='rules-menu'>
                  <ul className='rules-ul'>
                      {lists}
                  </ul>
              </div>
              <div className='rules-detail'>
                  <h2 style={{color:'coral'}}>{rulesData[this.state.show].title}</h2>
                  <p>{this.renderContent()}</p>
              </div>
          </div>
      )
  }
}
