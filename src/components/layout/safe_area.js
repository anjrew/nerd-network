import React from 'react';

export class SafeArea extends React.Component{

    constructor (props) {
        super(props);
        this.style = {
            padding: props.padding || '20px',
        };
    }
    render(){
        return (
            <div className={'safe-area'}>
                {this.props.children}
            </div>
        );
    }
}