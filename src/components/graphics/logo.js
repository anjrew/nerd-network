import React from 'react';
import { CoverageMap } from 'istanbul-lib-coverage';

export class Logo extends React.Component{

    constructor (props) {
        super(props);
        this.style = {
            height: props.height,
            width: props.height,
            objectFit: CoverageMap,

        };
    }

    render(){
        return (
            <img style={ this.style } className={'logoImage'} src='/assets/images/nerd-logo.png'/>
        );
    }
}