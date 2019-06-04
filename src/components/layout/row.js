import React from 'react';

export class Row extends React.Component{

    constructor (props) {
        super(props);
        this.children = props.children;
        this.style = { 
            display: 'flex', 
            flexDirection: 'row',
            alignItems: props.alignItems || 'center',
            alignContent: props.alignContent || 'center',
            justifyContent: props.justifyContent || 'space-between',
            width: props.width || '100%',
            backgroundColor: props.backgroundColor,
            padding: props.padding
        };
    }

    render(){
        return (
            <div style={this.style}>
                {this.children}
            </div>
        );
    }
}