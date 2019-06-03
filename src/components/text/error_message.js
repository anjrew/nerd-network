import React from 'react';

export class ErrorMessage extends React.Component{

    constructor (props) {
        super(props);
        this.message = props.message;
        this.style = {
            color: "red"
        };
    }

    render(){
        return (
            <h3 style={this.style}>{this.message}</h3>
        );
    }
}