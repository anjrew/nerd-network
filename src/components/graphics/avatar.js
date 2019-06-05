import React from 'react';

export class Avatar extends React.Component{
                    
    constructor (props) {
        super(props);
        this.onClick = props.onClick,
        this.style = props.style ? props.style : { 
            backgroundColor: props.backgroundColor,
            padding: props.padding || '5px',
            margin: props.margin || '5px',
            height: props.height || '100px',
            width: props.width || '100px',
            borderRadius: props.borderRadius || '50%',
        };
    }
                    
    render(){
        console.log('Rendering Avatar with props', this.props);
        return (
            <img 
                style={this.style} 
                src={this.props.imageUrl || '/assets/images/nerd-avatar.png'} 
                alt={this.props.description} 
                onClick={this.onClick}/>
        );
    }
}