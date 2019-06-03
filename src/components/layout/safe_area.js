import React from 'react';

export  class SafeArea extends React.Component{

    constructor (props) {
        super(props);
        this.children = props.children;
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