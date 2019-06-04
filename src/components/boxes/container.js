import React from 'react';

export class Container extends React.Component{

    constructor (props) {
        super(props);
        this.children = props.children;
        this.style = {
            display: props.display || 'flex',
            flexDirection: props.flexDirection || 'column',
            justifyContent: props.justifyContent || 'center',
            alignItems: props.alignItems || 'center',
            alignContent: props.alignContent || 'center',
            alignSelf: props.alignSelf || 'center',
            borderRadius: props.borderRadius,
            borderWidth: props.borderWidth,
            borderColor: props.borderColor,
            borderStyle: props.borderStyle,
            height: props.height,
            width: props.width,
            padding: props.padding, 
            margin: props.margin
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