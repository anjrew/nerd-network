import React from 'react';

// Components
import { Logo } from '../components/graphics/logo';
import { SafeArea } from '../components/layout/safe_area';
import { CenteredColumn } from '../components/layout/centered_column';
import { Row } from '../components/layout/row';
import { Avatar } from '../components/graphics/avatar';

export class App extends React.Component{

    constructor(){
        super();
        this.style = { 
            display: 'flex', 
            justifyContent: 'space-between',
            width: '100%',
        };
    }

    render(){
        return (
            <CenteredColumn>
                <Row backgroundColor={ 'red' } padding={'20px'}>
                    <Logo height={'100px'} width={"100px"}/>
                    <Avatar backgroundColor={'white'}/>
                </Row>
                <SafeArea>

                </SafeArea>
            </CenteredColumn>
        );
    }
}