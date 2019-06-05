import React from 'react';
import { CSSTransition, TransitionGroup,} from 'react-transition-group';


export class ErrorMessage extends React.Component{

    constructor (props) {
        super(props);
        this.style = {
            color: "red",
            padding: "20px"
        };
    }

    render(){
        return (
            <TransitionGroup>
                <CSSTransition
                    in={true}
                    timeout= {450}
                    classNames="scale"
                > 
                    <h3 style={this.style}>{this.props.children}</h3>
                </CSSTransition>
            </TransitionGroup>
        );
    }
}