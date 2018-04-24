import React from 'react';
import TITable from './TI/ti_table.js';

export default class TI extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            show : 0
        };
    }
    colorPanel(index){
        return index === this.state.show ? this.props.playerStyle : null
    };
    stylePanel(index){
        return index === this.state.show ? "active-tab-TI tab-TI" :"tab-TI"
    };
    renderContent(){
        return this.props.TIdata[this.state.show].content;
    };
    render(){
        const panels = [];
        const TIdata = this.props.TIdata;
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
        return(
            <div className='TI'>
                <div className='TI-tabs'>
                    <ul className='TI-ul'>
                        {panels}
                    </ul>
                </div>
                <div className='TI-table'>
                    <TITable
                    TIValue = {TIdata[this.state.show].content}
                    playerStyle = {this.props.playerStyle}/>
                </div>
            </div>
        )
    }
}
