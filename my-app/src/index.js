import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
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
]
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

const titles = ['Current Market Value','Tech...'];
const playersStyle = {
    backgroundColor : players[0].color
}

let roundTurn = 1;
let page = 3;

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
            <h1 className = 'title'>{titles[0]}</h1>
        )
    }
}

class MarketValueRow extends React.Component {
  render() {
    const row = this.props.row;
//    let current = row => {
//      if(row.current = null){
//          return '?'
//      }else{
//          return row.current
//      }
//    }
//    console.log(current());
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
                    <ul>
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
                    <Chart marketValue={CMVdata}/>
                </div>
                <div className='buttons'>
                    <Next/>
                    <ShowRule/>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Game />, document.getElementById("root"));





//function Square(props) {
//  return (
//    <button className="square" onClick={props.onClick}>
//      {props.value}
//    </button>
//  );
//}

//class Board extends React.Component {
//  renderSquare(i) {
//    return (
//      <Square
//        value={this.props.squares[i]}
//        onClick={() => this.props.onClick(i)}
//      />
//    );
//  }
//
//  render() {
//    return (
//      <div>
//        <div className="board-row">
//          {this.renderSquare(0)}
//          {this.renderSquare(1)}
//          {this.renderSquare(2)}
//        </div>
//        <div className="board-row">
//          {this.renderSquare(3)}
//          {this.renderSquare(4)}
//          {this.renderSquare(5)}
//        </div>
//        <div className="board-row">
//          {this.renderSquare(6)}
//          {this.renderSquare(7)}
//          {this.renderSquare(8)}
//        </div>
//      </div>
//    );
//  }
//}

//class Game extends React.Component {
//  constructor(props) {
//    super(props);
//    this.state = {
//      history: [
//        {
//          squares: Array(9).fill(null)
//        }
//      ],
//      stepNumber: 0,
//      xIsNext: true
//    };
//  }
//
//  handleClick(i) {
//    const history = this.state.history.slice(0, this.state.stepNumber + 1);
//    const current = history[history.length - 1];
//    const squares = current.squares.slice();
//    if (calculateWinner(squares) || squares[i]) {
//      return;
//    }
//      console.log(history);
//      console.log(squares);
//    squares[i] = this.state.xIsNext ? "X" : "O";
//    this.setState({
//      history: history.concat([
//        {
//          squares: squares
//        }
//      ]),
//      stepNumber: history.length,
//      xIsNext: !this.state.xIsNext
//    });
//  }
//
//  jumpTo(step) {
//    this.setState({
//      stepNumber: step,
//      xIsNext: (step % 2) === 0
//    });
//  }
//
//  render() {
//    const history = this.state.history;
//    const current = history[this.state.stepNumber];
//    const winner = calculateWinner(current.squares);
//
//    const moves = history.map((step, move) => {
//      const desc = move ?
//        'Go to move #' + move :
//        'Go to game start';
//      return (
//        <li key={move}>
//          <button onClick={() => this.jumpTo(move)}>{desc}</button>
//        </li>
//      );
//    });
//
//    let status;
//    if (winner) {
//      status = "Winner: " + winner;
//    } else {
//      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
//    }
//
//    return (
//      <div className="game">
//        <div className="game-board">
//          <Board
//            squares={current.squares}
//            onClick={i => this.handleClick(i)}
//          />
//        </div>
//        <div className="game-info">
//          <div>{status}</div>
//          <ol>{moves}</ol>
//        </div>
//      </div>
//    );
//  }
//}

// ========================================

//ReactDOM.render(<Game />, document.getElementById("root"));

//function calculateWinner(squares) {
//  const lines = [
//    [0, 1, 2],
//    [3, 4, 5],
//    [6, 7, 8],
//    [0, 3, 6],
//    [1, 4, 7],
//    [2, 5, 8],
//    [0, 4, 8],
//    [2, 4, 6]
//  ];
//  for (let i = 0; i < lines.length; i++) {
//    const [a, b, c] = lines[i];
//    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//      return squares[a];
//    }
//  }
//  return null;
//}
