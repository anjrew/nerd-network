import React from 'react';
import { CenteredColumn } from '../layout/centered_column';
import { TextArea } from '../inputs/text_area';

export class BioEditor extends React.Component{

    constructor (props) {
        super(props);
        this.state = { 
            bioIsEditing: false,
            bioExists: props.bio,
            bio: props.bio,
        };
        this.editClicked = this.editClicked.bind(this);
        this.addClicked = this.addClicked.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    render(){
        if (this.state.bioIsEditing){
            return (
                <CenteredColumn padding={'20px'}>
                    <TextArea 
                        name='bio' 
                        value={this.state.bio} 
                        handleChange={this.handleChange}
                    />
                    <button onClick={() => this.props.setBio(this.state.bio)}>Save</button>
                </CenteredColumn>
            );
        } else {
            if (this.state.bioExists) {
                return (
                    <CenteredColumn padding={'20px'}>
                        <p>{this.props.bio}</p>
                        <button onClick={this.editClicked}>Edit</button>
                    </CenteredColumn>
                );
            } else {
                return (
                    <button onClick={this.addClicked}>Add</button>
                );
            }
        }
    }

    editClicked(){
        console.log('Edit clicked in the bio Editor');
        this.setState({
            bioIsEditing: true
        });
    }

    addClicked(){
        console.log('Add clicked in the bio Editor');
        this.setState({
            bioIsEditing: true
        });
    }

    handleChange({ target }) {
        console.log('Handling text change with name: ', target.name, ' with Value: ', target.value );
        this.setState({
            [target.name]: target.value
        });
    }
}