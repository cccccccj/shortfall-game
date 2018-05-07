import React from 'react';
import Header from './header.js';
import Title from './title.js';
import Buttons from './button.js';
import {PSdata, CMVdata,TIdata} from '../data/data.js';
import CMVChart from './cmv.js';
import TI from './ti.js';
import PS from './ps.js';
import Setup from './setup.js';

const players = [{
      'playerName':'',
      'color':''
  },{
      'playerName':'Materials',
      'color':'#2A8039'
  },{
      'playerName':'Parts',
      'color':'#FF8522'
  },{
      'playerName':'Carts',
      'color':'#DC3522'
  }];
const titles = ['Set up','Premise','Objective and Scoring','Current Market Value','Technological Innovation','Production & Sales','Current Event','Current Score'];

const defaultColor = '#8ABED8';
let show = [true,false,false,false,false,false,false,false]

let countPlayer = 1;
let roundTurn = 1;
let playersStyle;

export default class Layout extends React.Component {
    constructor(){
      super();
      this.state = {
        page:0
      };
    }
    changePage(){
      let page = this.state.page + 1;
      if (this.state.page ===5){
          if(countPlayer<3){
              this.setState({page : 3});
              countPlayer++;
          }else{
              countPlayer=1;
              this.setState({page : page})
          }
      }else{
        this.setState({page : page})
      }
      if (roundTurn<10 & page === 8){
          this.setState({page : 3});
          roundTurn++;
      }
    }
    showPage(){
      show = show.map(x=> x = false);
      show[this.state.page] = true;
    }
    playerStyle(){
      return playersStyle = {
          backgroundColor : players[countPlayer].color
      }
    }
    render(){
        return(
          <div>
            <Header player={players[countPlayer]}
                            roundTurn={roundTurn}
                            page = {this.state.page}
            />
            <div className='middle' onload={this.showPage()}>
              {!show[0] ? <Title title= {titles[this.state.page]}/> :null}
              {show[5] && <PS data = {PSdata}/>}
              {show[4] && <TI TIdata = {TIdata} playerStyle = {this.playerStyle()}/>}
              {show[3] && <CMVChart marketValue= {CMVdata}/>}
              {show[0] && <Setup/>}
            </div>
            {!show[0] ? <Buttons
              changePage = {this.changePage.bind(this)}
              page = {this.state.page}
            /> : null}
          </div>
        );
    }
}
