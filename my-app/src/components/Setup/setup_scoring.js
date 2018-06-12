import React from 'react';

export default class Scoring extends React.Component{
  render(){
    return(
      <div>
          <div className='setup-text setup-heading'>
              Scoring
          </div>
          <div className='setup-info'>
              <div className='setup-info-text'>
              Scoring is based on 4 factors: Total Profits, Total Greenscore,
               Waste Removal Cost Efficiency, and Profits Per Car. The team that
               scores highest in the most categories wins the game.
              </div>
              <table className = 'setup-chart'>
                  <thead>
                      <tr>
                          <th></th>
                          <th style = {{color:'#4E389E'}}>'Current'</th>
                          <th style = {{color:'#4E389E'}}>'Net Change'</th>
                      </tr>
                  </thead>
                  <tbody>
                    <tr style = {{backgroundColor:'#4E389E'}}>
                      <td>Total Funds</td>
                      <td>$5290</td>
                      <td>+$305</td>
                    </tr>
                    <tr style = {{backgroundColor:'#4E389E'}}>
                      <td>Total Cars Sold</td>
                      <td>560</td>
                      <td>+25</td>
                    </tr>
                    <tr style = {{backgroundColor:'#4E389E'}}>
                      <td>Total Greenscore</td>
                      <td>230</td>
                      <td>-45</td>
                    </tr>
                    <tr style = {{backgroundColor:'#4E389E'}}>
                      <td>Total Greenscore</td>
                      <td>230</td>
                      <td>-45</td>
                    </tr>
                    <tr style = {{backgroundColor:'#4E389E'}}>
                      <td>Total Waste Removed</td>
                      <td>45</td>
                      <td>-6</td>
                    </tr>
                    <tr style = {{backgroundColor:'#4E389E'}}>
                      <td>Total Waste Removal Costs</td>
                      <td>$5290</td>
                      <td>+$45</td>
                    </tr>
                  </tbody>
               </table>
          </div>
      </div>
    )
  }
}
