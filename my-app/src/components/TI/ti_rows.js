import React from 'react';

export default class TIRow extends React.Component {

    colorButton(title){
        return title === null ? null : this.props.playerStyle
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
                    <div className={this.styleButton(row.chose1.title)} style = {this.props.playerStyle} >
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
