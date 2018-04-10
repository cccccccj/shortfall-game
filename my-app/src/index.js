import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './index.css';
import {CMVdata, rulesData,TIdata} from './data.js';
//import InfoLogo from './svg/info-circle.svg';
//import RightLogo from './svg/caret-right.svg';

const defaultColor = '#8ABED8';
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



let roundTurn = 1;
let page = 3;
let countPlayer = 1;
let currentPageRule;
let playersStyle = {
    backgroundColor : players[roundTurn].color
}
class Players extends React.Component {
    render(){
        return(
            <div className = 'players' style = {playersStyle}>
                <h2 style = {{textAlign: 'center'}}>{players[countPlayer].playerName}</h2>
            </div>
        );
    }
}
class Rounds extends React.Component{
    render(){
        return(
            <div className = 'rounds'>
                <h2 style = {{textAlign: 'center'}}>Rounds{roundTurn}</h2>
            </div>
        )
    }
}


function Next() { 
    page++;
    if (page ===6){
        if(countPlayer<3){
            page = 3;
            countPlayer++;
        }else{
            countPlayer=1;
        }
    }
    if (roundTurn<10 & page === 8){
        page = 3;
        roundTurn++;
    }
    playersStyle = {
        backgroundColor : players[countPlayer].color
    }

    return (
        <button className="button"> 
            <Link to={`/${page}`} className='next-link'>
                Next 
                <img src={'./svg/caret-right.svg'}/>
            </Link>
        </button>
    );
}
class RuleContent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            show : page
        };
    }
    styleMenu(index){
        return index === this.state.show ? "active-tab tab" :"tab"
    };
    renderContent(){
   //     if ()
        return rulesData[this.state.show].content;
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
class Rule extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='rules'>
            <button id= 'close-icon' onClick={this.props.closePopup}> 
                &#10005; 
            </button> 
            <RuleContent />   
        </div>
      </div>
    )
  }
}
class ShowRule extends React.Component {
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
                    <img src={'./svg/info-circle.svg'}/>
                </button>
                <div>
                    {this.state.show ? 
                        <Rule
                            closePopup={this.togglePopup.bind(this)}
                        />
                        : null
                    }
                </div>
            </div>
        )
    }
}

class TIRow extends React.Component {

    colorButton(title){
        return title === null ? null : playersStyle
    };
    styleButton(title){
        return title === null ? null : "cell-button cell"
    };
    lockLayer(lock){
        return lock === false ? 'unlock-row row-TI' :'lock-row row-TI'
    };
//    selectButton(lock){
//        return lock === false ? 'selected-button':''
//    }
    render() {
        const row = this.props.row;
        return (
            <tr className={this.lockLayer(row.lock)}>
                <td className='level-TD'>
                    <div className='cell'>
                        <h3>{row.level.title}</h3>
                        <p>{row.level.note}</p>   
                    </div>
                </td>
                <td className='choice-TD'>
                    <div className={this.styleButton(row.chose1.title)} style = {playersStyle} >
                        <h3>{row.chose1.title}</h3>
                        <p>{row.chose1.note}</p>
                    </div>
                </td>
                <td className='choice-TD'>
                    <div className={this.styleButton(row.chose2.title)} style = {this.colorButton(row.chose2.title)}>
                        <h3>{row.chose2.title}</h3>
                        <p>{row.chose2.note}</p>
                    </div>
                </td>
                <td className='choice-TD'>
                    <div className={this.styleButton(row.chose3.title)} style = {this.colorButton(row.chose3.title)}>
                        <h3>{row.chose3.title}</h3>
                        <p>{row.chose3.note}</p>
                    </div>
                </td>
            </tr>
        );
    }
}
class TITable extends React.Component{
    render(){
        const TBrows = [];
        this.props.TIValue.forEach((row,index) => {
            TBrows.push(
            <TIRow
            row={row}
            key={index} />
            );
        });
        return(
            <table className = 'TI-table'>
                <tbody className='tbody-TI'>
                    {TBrows}
                </tbody>
            </table>
        )
    } 
} 
class TI extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            show : 0
        };
    }
    colorPanel(index){
        return index === this.state.show ? playersStyle : null
    };
    stylePanel(index){
        return index === this.state.show ? "active-tab-TI tab-TI" :"tab-TI"
    };
    renderContent(){
        return TIdata[this.state.show].content;
    };
    render(){
        const panels = [];
        TIdata.forEach((panel,index) =>{
            panels.push(<li
                            onClick={()=>{this.setState({show:index})}}
                            className = {this.stylePanel(index)} 
                            style = {this.colorPanel(index)}
                       >
                        {panel.name}
                       </li>
                      )
        });
        return(
            <div className='TI'>
                <div className='TI-tabs'>
                    <ul className='TI-ul'>
                        {panels}
                    </ul>
                </div>
                <div className='TI-table'>
                    <TITable TIValue = {TIdata[this.state.show].content}/>
                </div>
            </div>
        )
    }
}



class MarketValueRow extends React.Component {
  render() {
    const row = this.props.row;
    return (
      <tr style = {{backgroundColor:row.color}}>
        <td>{row.category}</td>
        <td>{row.current}</td>
        <td>{row.net}</td>
      </tr>
    );
  }
}
class Chart extends React.Component{
    render(){
        const rows = [];
        this.props.marketValue.forEach((row) => {
            rows.push(
            <MarketValueRow
            row={row}
            key={row.category} />
            );
        });
        return(
            <table className = 'CMV-chart'>
                <thead>
                    <tr>
                        <th></th>
                        <th>'This Round'</th>
                        <th>'Net Change'</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }
}

class Game extends React.Component {
    render(){
        return(
            <BrowserRouter>
                <div>
                    <div className='header'>
                        <Route exact={true} path="/(3|4|5)/" component={Players}/>
                        <Rounds/>
                    </div>
            
                    <div className='middle'>  
                        <Route exact={true} path = '/:page' render={()=>(
                            <h1 className = 'title'>{titles[page]}</h1>
                        )}/>
                        <Route exact={true} path = '/3' render={()=>(
                            <Chart marketValue={CMVdata}/>
                        )}/>
                        <Route exact={true} path='/4' component={TI}/> 
                    </div>
                    <div className='buttons'>
                        <Next/>
                        <ShowRule/>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Game />, document.getElementById("root"));
