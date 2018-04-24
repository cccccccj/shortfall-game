import React from 'react';
import CMVRow from './CMV/cmv_row.js'

export default class CMVChart extends React.Component{
    render(){
        const rows = [];
        this.props.marketValue.forEach((row) => {
            rows.push(
            <CMVRow
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
