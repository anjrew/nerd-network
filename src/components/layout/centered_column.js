import React from 'react';

export class CenteredColumn extends React.Component{

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
        return (
            <div style={this.sytle} className={'centeredColumn'}>
                {this.children}
            </div>
        );
    }
}

