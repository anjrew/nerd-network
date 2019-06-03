import React from 'react';
import Routes from '../data/routes';

// Components
import { Logo } from '../components/graphics/logo';
import { SafeArea } from '../components/layout/safe_area';
import CenteredColumn from '../components/layout/centered_column';
import { HashRouter, Route } from 'react-router-dom';
import { Registration } from '../pages/registration';


export class Welcome extends React.Component{

    constructor (props) {
        super(props);
        this.state = {};
    }

    render(){
        return (
            <SafeArea>
                <CenteredColumn>
                    <h2>Welcome to the Nerd Network</h2>
                    <Logo/>
                    <HashRouter>
                        <React.Fragment>
                            <Route exact path={ Routes.registration } compnent={ Registration} />
                            <Route exact path={ Routes.login } compnent={ Login }/>
                        </React.Fragment>
                    </HashRouter>
                </CenteredColumn>
            </SafeArea>
        );
    }

    switchToLogin(){
        console.log('Switching to login');
    }
}