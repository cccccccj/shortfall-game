import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import {CMVdata, rulesData} from './data.js';
//import InfoLogo from './svg/info-circle.svg';
//import RightLogo from './svg/caret-right.svg';

const CMVdata = [
  {category: 'Raw Materials Price', color: '#8ABED8', current: '$590', net: '$0'},
  {category: 'Materials Sell Price', color: '#2A8039',current: '$1090', net: '$0'},
  {category: 'Parts Sell Price', color: '#FF8522',current: '$1590', net: '$0'},
  {category: 'Cars Sell Price', color: '#DC3522',current: '$2090', net: '$0'},
  {category: 'Max Buy Amount', color: '#8ABED8',current: '9', net: '0'},
  {category: 'Max Buy Amount', color: '#8ABED8',current: null, net: null}
];
const TIdata = [
    {name:'Production', content:[
        {level :{title:'Production Level 1',note:'Complete 2 of these innovations to unlock Level 2'}, chose1:{title:'Emission Control',note:'Coking operations for stell production require major investments and upgrades for emmision control to meet Clean Air Act requiements.'},chose2:{title:'BOF Dust Recycling',note:'Recovery of toxic metal dusts from steelmaking processes avoids placement of high zinc content dust in landfills and reduces needs for compliance with RCRA. Zinc can be reused and avoids.'},chose3:{title:'Energy Reduction',note:'Investment in heat recovery and recircilation equipment is used to capture to save energy.'}},
        {level :{title:'Production Level 2',note:'Complete 1 of these innovations to unlock Level 3'}, chose1:{title:'PFC Emissions',note:'Coking operations for stell production require major investments and upgrades for emmision control to meet Clean Air Act requiements.'},chose2:{title:'Lightweighting',note:'Recovery of toxic metal dusts from steelmaking processes avoids placement of high zinc content dust in landfills and reduces needs for compliance with RCRA.'},chose3:{title:null,note:null}},
        {level :{title:'Production Level 3',note:'Complete 1 of these innovations plus 1 in each other category to unlock Mastery'}, chose1:{title:'EStrip Casting',note:'Coking operations for stell production require major investments and upgrades for emmision control to meet..'},chose2:{title:'Glass Replacement',note:'Recovery of toxic metal dusts from steelmaking processes avoids placement of high zinc content dust in landfills and reduces needs for compliance with RCRA...'},chose3:{title:null,note:null}},
        {level :{title:'Mastery requires:',note:'Storage Level1 Waste Level1'}, chose1:{title:'Electrolytic Cell Technology',note:'Coking operations for stell production require major investments and upgrades for emmision control to meet..'},chose2:{title:null,note:null},chose3:{title:null,note:null}}
    ]},
    {name:'Storage', content:[
        {level :{title:'Storage Level 1',note:'Complete 2 of these innovations to unlock Level 2'}, chose1:{title:'Just In Time',note:'Coking operations for stell production require major investments and upgrades for emmision control to meet Clean Air Act requiements.'},chose2:{title:'AGV',note:'Recovery of toxic metal dusts from steelmaking processes avoids placement of high zinc content dust in landfills and reduces needs for compliance with RCRA. Zinc can be reused and avoids.'},chose3:{title:'KANBAN',note:'Investment in heat recovery and recircilation equipment is used to capture to save energy.'}},
        {level :{title:'Storage Level 2',note:'Complete 1 of these innovations to unlock Level 3'}, chose1:{title:'PFC Emissions',note:'Coking operations for stell production require major investments and upgrades for emmision control to meet Clean Air Act requiements.'},chose2:{title:'Lightweighting',note:'Recovery of toxic metal dusts from steelmaking processes avoids placement of high zinc content dust in landfills and reduces needs for compliance with RCRA.'},chose3:{title:null,note:null}},
        {level :{title:'Storage Level 3',note:'Complete 1 of these innovations plus 1 in each other category to unlock Mastery'}, chose1:{title:'EStrip Casting',note:'Coking operations for stell production require major investments and upgrades for emmision control to meet..'},chose2:{title:'Glass Replacement',note:'Recovery of toxic metal dusts from steelmaking processes avoids placement of high zinc content dust in landfills and reduces needs for compliance with RCRA...'},chose3:{title:null,note:null}},
        {level :{title:'Mastery requires:',note:'Storage Level1 Waste Level1'}, chose1:{title:'Electrolytic Cell Technology',note:'Coking operations for stell production require major investments and upgrades for emmision control to meet..'},chose2:{title:null,note:null},chose3:{title:null,note:null}}
    ]},
    {name:'Waste', content:[
        {level :{title:'Waste Level 1',note:'Complete 2 of these innovations to unlock Level 2'}, chose1:{title:'Scrp Segregation',note:'Coking operations for stell production require major investments and upgrades for emmision control to meet Clean Air Act requiements.'},chose2:{title:'AGV',note:'Recovery of toxic metal dusts from steelmaking processes avoids placement of high zinc content dust in landfills and reduces needs for compliance with RCRA. Zinc can be reused and avoids.'},chose3:{title:'Plastics Recycling',note:'Reuse of plastic containers and bins used in shipping leads to reduced packaging costs.'}},
        {level :{title:'Waste Level 2',note:'Complete 1 of these innovations to unlock Level 3'}, chose1:{title:'PFC Emissions',note:'Coking operations for stell production require major investments and upgrades for emmision control to meet Clean Air Act requiements.'},chose2:{title:'Lightweighting',note:'Recovery of toxic metal dusts from steelmaking processes avoids placement of high zinc content dust in landfills and reduces needs for compliance with RCRA.'},chose3:{title:null,note:null}},
        {level :{title:'Waste Level 3',note:'Complete 1 of these innovations plus 1 in each other category to unlock Mastery'}, chose1:{title:'EStrip Casting',note:'Coking operations for stell production require major investments and upgrades for emmision control to meet..'},chose2:{title:'Glass Replacement',note:'Recovery of toxic metal dusts from steelmaking processes avoids placement of high zinc content dust in landfills and reduces needs for compliance with RCRA...'},chose3:{title:null,note:null}},
        {level :{title:'Mastery requires:',note:'Storage Level1 Waste Level1'}, chose1:{title:'Electrolytic Cell Technology',note:'Coking operations for stell production require major investments and upgrades for emmision control to meet..'},chose2:{title:null,note:null},chose3:{title:null,note:null}}
    ]}
];
const rulesData = [
    {id:'0',title:'Premise',content:'Your team has purchased three factories in a supply chain: a Materials producer, a Parts producer, and a Cars producer. The factories still have some supplies in storage from past production, but as the new managers of each of these companies, your team will have to work together to produce the most efficient supply chain and provide all is members with sufficient resources each round.'},
    {id:'1',title:'Setup',content:'Divide players into teams consisting of 3 or more people per team.  There must be at least two teams.In teams of 3, each player will manage a tier of the supply chain.  In teams of more than 3, players will share management of their tier. They may divide up the decision-making as they see fit, but close collaboration is encouraged.Assign each player to one of the 3 tiers of the supply chain: Materials (2nd Tier), Parts (1st Tier), or Cars (OEM). Each team must have at least one player assigned to each tier of the supply chain.'},
    {id:'2',title:'Objective and Scoring',content:'Objective:Work with your team to achieve the highest score by managing the most profitable and environmentally benign supply chain.'},
    {id:'3',title:'Game Play Overview',content:"A full game consists of 10 rounds for every team. Within a round, each player on your team (Materials, Parts, and Cars) takes one turn. Each team operates on a single computer. When a player is finished with his or her turn, he or she gives control to the next team-member. After ten rounds, report your team's scores to the facilitator, who will determine the overall winner among teams."},
    {id:'4',title:'Current Market Values',content:'The first phase of each round is a display of the current market values. This table will show you:...'},
    {id:'5',title:'Technological Innovations',content:'This step allows you to implement a new technology in your factory each turn. Use the buttons at the top to view the three technology trees, which offer improvements in the areas of production, storage and waste. As you accumulate innovations you will unlock more options further down each of the three trees.'},
    {id:'6',title:'Production and Sales',content:"Four major decisions are made on this screen. The current tier increases or decreases the number of units to purchase, produce, and sell, and decides how much waste to remove versus store. All information is updated on the screen as changes in projections are made, but nothing is finalized until the 'next' button is pressed.If a unit's data turns red, this indicates a finance or capacity problem that must be resolved before play can continue."},
    {id:'7',title:'Current Event',content:'At the end of each round, an event occurs that will affect game play for the next round. These events can affect one or all tiers of your team. All teams playing the same game number will see the same current events.'},
    {id:'8',title:'Current Score',content:"Before a new round begins, your team's combined scores are displayed. These are the components of the final scores that determine the game's winner after ten rounds."},
    {id:'9',title:'Game End',content:'Winning: There are four final scores: Total Profits, Green Score, Profit Per Car, and Waste Disposal Cost Efficiency. The team that achieves the greatest number of best scores wins. For example, in a four-team game, if one team scores highest in two areas and two other teams score highest in only one area each, then the team scoring highest in two areas wins.'}
];
const defaultColor = '#8ABED8';
const players = [{
        'playerName':'Materials',
        'color':'#2A8039'
    },{
        'playerName':'Parts',
        'color':'#FF8522'
    },{
        'playerName':'Carts',
        'color':'#DC3522'
    }];

const titles = ['Current Market Value','Technological Innovation'];
const playersStyle = {
    backgroundColor : players[0].color
}

let roundTurn = 1;
let page = 5;

class Players extends React.Component {
    render(){
        return(
            <div className = 'players' style = {playersStyle}>
                <h2 style = {{textAlign: 'center'}}>{players[0].playerName}</h2>
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
class Title extends React.Component{
    render(){
        return(
            <h1 className = 'title'>{titles[1]}</h1>
        )
    }
}
function Next() {
    return (
        <button className="button"> 
            Next   
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
    render() {
        const row = this.props.row;
        return (
            <tr className='row-TI'>
                <td className='level-TD'>
                    <div className='cell'>
                        <h3>{row.level.title}</h3>
                        <p>{row.level.note}</p>   
                    </div>
                </td>
                <td className='choice-TD'>
                    <div className='cell' style = {playersStyle}>
                        <h3>{row.chose1.title}</h3>
                        <p>{row.chose1.note}</p>
                    </div>
                </td>
                <td className='choice-TD'>
                    <div className='cell' style = {this.colorButton(row.chose2.title)}>
                        <h3>{row.chose2.title}</h3>
                        <p>{row.chose2.note}</p>
                    </div>
                </td>
                <td className='choice-TD'>
                    <div className='cell' style = {this.colorButton(row.chose3.title)}>
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
        const rows = [];
        this.props.TIValue.forEach((row,index) => {
            rows.push(
            <TIRow
            row={row}
            key={index} />
            );
        });
        return(
            <table className = 'TI-table'>
                <tbody className='tbody-TI'>
                    {rows}
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
console.log(TIdata[this.state.show].content)
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


class Game extends React.Component {
    render(){
        return(
            <div>
                <div className='header'>
                    <Players/>
                    <Rounds/>
                </div>
            
                <div className='middle'>
                    <Title/>
                    <TI/>
                </div>
                <div className='buttons'>
                    <ShowRule/>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Game />, document.getElementById("root"));
