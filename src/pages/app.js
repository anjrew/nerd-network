import React from 'react';
import axios from '../react_utils/axios';
import routes from '../react_utils/react_routes';

// Components
import { Logo } from '../components/graphics/logo';
import { SafeArea } from '../components/layout/safe_area';
import { CenteredColumn } from '../components/layout/centered_column';
import { Row } from '../components/layout/row';
import { Avatar } from '../components/graphics/avatar';
import { Uploader } from '../components/modules/Uploader';

export class App extends React.Component{

    constructor(){
        super();
        this.state = {
            uploaderVisible: false
        };

        this.dismissLoader = this.dismissLoader.bind(this);
        this.avatarClicked = this.avatarClicked.bind(this);
        this.uploadClicked = this.uploadClicked.bind(this);
    }

    render(){
        console.log('Rendering app with state', this);
        return (
            <CenteredColumn>
                <Row backgroundColor={ 'red' }>
                    <Logo height={ '100px' } width={ "100px" }/>
                    <Avatar backgroundColor={ 'white' } onClick={ this.avatarClicked }/>
                </Row>
                <SafeArea>
                    { this.state.uploaderVisible && <Uploader dismissLoader={ this.dismissLoader }/> }
                </SafeArea>
            </CenteredColumn>
        );
    }

    componentDidMount() {
        axios.get(routes.user).then(res => {
            this.setState({
                user: {
                    bio: res.data.bio,
                    profile_creation_date: res.data.created_at,
                    email: res.data.email,
                    name: res.data.name,
                    surname: res.data.surname,
                    imageUrl: res.data.pic_url || "./placeholder.gif"
                }
            });
        });
    }

    dismissLoader(){
        console.log('Dismissing the Uploader and this is ', this);
        this.setState({
            uploaderVisible: false
        });
    }

    avatarClicked(){
        console.log('Avatar Clicked and this is', this.state.uploaderVisible);
        if (this.state.uploaderVisible) {
            this.setState({ uploaderVisible: false });
        } else {
            this.setState({ uploaderVisible: true });
        }
    }

    uploadClicked(){
        console.log('Upload Button Clicked and this is', this);
    }
}