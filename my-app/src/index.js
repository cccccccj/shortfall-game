import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

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
const CMVtable = ['Raw Materials Price','Materials Sell Price', 'Parts Sell Price', 'Cars Sell Price', 'Max Buy Amount', 'Max Buy Amount'];

const titles = ['Current Market Value','Tech...'];
const playersStyle = {
    backgroundColor : players[0].color
}

const defaultColor = '#8ABED8';

let roundTurn = 1;

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

class Chart extends React.Component{
    render(){
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
                <tr style = {{backgroundColor:'#8ABED8'}}>
                    <td>{CMVtable[0]}</td>
                    <td>sdf</td>
                    <td>sdf</td>
                </tr>
                <tr style = {{backgroundColor:players[0].color}}>
                    <td>{CMVtable[1]}</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr style = {{backgroundColor:players[1].color}}>
                    <td>{CMVtable[2]}</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr style = {{backgroundColor:players[2].color}}>
                    <td>{CMVtable[3]}</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr style = {{backgroundColor:'#8ABED8'}}>
                    <td>{CMVtable[4]}</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr style = {{backgroundColor:'#8ABED8'}}>
                    <td>{CMVtable[5]}</td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
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
                    <Chart/>
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
