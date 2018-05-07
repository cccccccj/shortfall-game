import React from 'react';

export default class PSRow extends React.Component{
  render() {
      const lines = [];
      this.props.row.forEach((line) =>{
        lines.push(
          <tr>
            <td>{line.item}</td>
            <td>{line.unit}</td>
            <td>{line.detail[0].name}</td>
            <td>{line.detail[0].unit}</td>
          </tr>
        )
        if(line.detail[1]){
          lines.push(
            <tr>
              <td></td>
              <td></td>
              <td>{line.detail[1].name}</td>
              <td>{line.detail[1].unit}</td>
            </tr>
          )
        }
      });
      return (
          <tbody className ='PS-table'>
            {lines}
          </tbody>
      );
  }
}
