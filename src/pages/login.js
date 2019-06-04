import React from 'react';
import axios from '../react_utils/axios';
import db from '../react_utils/ids';
import Routes from '../react_utils/react_routes';



// Components
import { TextField } from '../components/inputs/textfield';
import { CenteredColumn } from '../components/layout/centered_column';
import { ErrorMessage } from '../components/text/error_message';
import { Link } from 'react-router-dom';

export class Login extends React.Component{

    constructor (props) {
        super(props);
        this.state = {};
    }

    render(){
        return (
            <React.Fragment>
                {this.state.error && <ErrorMessage>{this.state.error}</ErrorMessage>}
                <CenteredColumn>
                    <TextField inputType="text" label="Email" id={db.email} handleChange={this.handleChange} required/>
                    <TextField inputType="password" label="Password" id={db.password} handleChange={this.handleChange} required/>
                    <button onClick={() => this.submit()}>Login</button>
                </CenteredColumn>
                <Link className='link-button' to={Routes.home}>Click here to sign up!</Link>
            </React.Fragment>
        );
    }

    handleChange({ target }) {
        console.log('Handling text change with name: ', target.name, ' with Value: ', target.value );
        this.setState({
            [target.name]: target.value
        });
    }

    submit(){
        console.log('Sign up button pressed');
        axios.post('/register', {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
        }).then((response) => {
            if (response.success){
                location.replace('/');
            } else {
                this.setState({
                    error: response.error,
                });
            }
        }).catch((e) =>{
            this.setState({
                error: e
            });
        });
    }
}