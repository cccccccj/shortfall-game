import React from 'react';

export default class CMVRow extends React.Component {
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
