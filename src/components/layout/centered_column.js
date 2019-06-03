import React from 'react';

export default class CenteredColumn extends React.Component{

    constructor (props) {
        super(props);
        this.children = props.children;
        this.style = {
            display:'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            alignItems: 'center',
            flexWrap: 'wrap',
            alignContent: 'center'
        };
    }
    render(){
        console.log(this);
        return (
            <div style={this.sytle} className={'centeredColumn'}>
                {this.children}
            </div>
        );
    }
}
