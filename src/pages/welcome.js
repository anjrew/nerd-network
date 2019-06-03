import React from 'react';
import Routes from '../data/routes';

// Components
import { Logo } from '../components/graphics/logo';
import { SafeArea } from '../components/layout/safe_area';
import CenteredColumn from '../components/layout/centered_column';
import { HashRouter, Route } from 'react-router-dom';
import { Registration } from '../pages/registration';
import { Login } from '../pages/login';


export class Welcome extends React.Component{

    render(){
        return (
            <SafeArea>
                <CenteredColumn>
                    <h2>Welcome to the Nerd Network</h2>
                    <Logo/>
                    <HashRouter>
                        <React.Fragment>
                            <Route exact path={ Routes.home } component={ Registration } />
                            <Route path={ Routes.login } component={ Login }/>
                        </React.Fragment>
                    </HashRouter>
                </CenteredColumn>
            </SafeArea>
        );
    }
}