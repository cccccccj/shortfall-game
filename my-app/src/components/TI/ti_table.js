import React from 'react';
import TIRow from './ti_rows.js';

export default class TITable extends React.Component{
    render(){
        const TBrows = [];
        this.props.TIValue.forEach((row,index) => {
            TBrows.push(
            <TIRow
            row={row}
            playerStyle={this.props.playerStyle}
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
