import React from 'react';
import { Row } from '../layout/row';
import { Avatar } from '../graphics/avatar';
import { BioEditor } from '../modules/bio_editor';
import { CenteredColumn } from '../layout/centered_column';
import { CSSTransition } from 'react-transition-group';


export class Profile extends React.Component{

    constructor (props) {
        super(props);
        this.state = {
            bioEditorIsVisible: false
        };
        this.setBio = this.setBio.bind();
    }

    render(){
        console.log('Rendering Profile with props', this.props);
        return (
            <Row padding={'20px'}>
                <Avatar  
                    onClick={ this.props.uploadClicked} 
                    imageUrl={this.props.user.imageUrl}
                    description="User image"
                />
                <CenteredColumn padding={'20px'}>
                    <p>{`${this.props.user.first}`}</p>
                
                    <CSSTransition in={this.state.bioEditorIsVisible} timeout={200} classNames="scale">
                        <BioEditor
                            bio={this.props.user.bio}
                            setBio={this.setBio}
                        />
                    </CSSTransition>
                   
                </CenteredColumn>
            </Row>
        );
    }

    setBio(){

    }
}
