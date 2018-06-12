import React from 'react';

export default class PSRow extends React.Component{
  render() {
      const lines = [];
      const iconStyle = {
        width:'20%',
        borderTopLeftRadius:'10px',
        borderBottomLeftRadius: '10px'
      }
      let src = '../svg/'+this.props.index+'.svg';
      this.props.row.forEach((line,index) =>{
        if(index===0){
          lines.push(
            <tr>
              <td style={iconStyle} rowspan={line.line}>  <img src={src} className='PS-icons'/></td>
              <td style={{width:'40%'}}>{line.item}
                <span style={{color:'#093546'}}>{line.unit}</span>
              </td>
              <td style={{width:'30%'}}>{line.detail[0].name}   {line.detail[0].unit}</td>
              <td style={this.props.playerStyle}></td>
            </tr>
          )
        }else{
          lines.push(
            <tr>
              <td style={{width:'40%'}}>{line.item}
                <span style={{color:'#093546'}}>{line.unit}</span>
              </td>
              <td style={{width:'30%'}}>{line.detail[0].name}   {line.detail[0].unit}</td>
              <td style={this.props.playerStyle}></td>
            </tr>
          )
        }
        if(line.detail[1]){
          lines.push(
            <tr>
              <td></td>
              <td>{line.detail[1].name}
                <span style={{color:'#093546'}}>{line.detail[1].unit}</span>
              </td>
              <td style={this.props.playerStyle}></td>
            </tr>
          )
        }
      });
      return (
          <table className='PS-table' >
            <tbody className='PS-chart'>
              {lines}
            </tbody>
          </table>
      );
  }
}
