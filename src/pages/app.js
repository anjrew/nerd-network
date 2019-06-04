import React from 'react';

// Components
import { Logo } from '../components/graphics/logo';
import { SafeArea } from '../components/layout/safe_area';
import { CenteredColumn } from '../components/layout/centered_column';
import { Row } from '../components/layout/row';
import { Avatar } from '../components/graphics/avatar';
import { Container } from '../components/boxes/container';

export class App extends React.Component{

    constructor(){
        super();
        this.state = {};
        this.dismissLoader = this.dismissLoader.bind(this);
        this.avatarClicked = this.avatarClicked.bind(this);
    }

    render(){
        return (
            <CenteredColumn>
                <Row backgroundColor={ 'red' } padding={ '20px' }>
                    <Logo height={ '100px' } width={ "100px" }/>
                    <Avatar backgroundColor={ 'white' } onClick={this.avatarClicked}/>
                </Row>
                <SafeArea>
                    <Container margin="20px" padding='20px' borderRadius="20px" borderWidth="3px">
                        <Row justifyContent={'flex-end'} >
                            <button onClick={this.dismissLoader}></button>
                        </Row>
                    </Container>
                </SafeArea>
            </CenteredColumn>
        );
    }

    componentDidMount(){

    }

    dismissLoader(){
        console.log('Dismissing the Uploader and this is ', this);

    }

    avatarClicked(){
        console.log('Avatar Clicked ', this);
    }
}