import React from 'react';

export class SafeArea extends React.Component{

    constructor (props) {
        super(props);
        this.children = props.children;
        this.style = {
            padding: props.padding || '20px',
        };
    }

    render(){
        console.log(this);
        return (
            <div className={'safe-area'}>
                {this.children}
            </div>
        );
    }
}