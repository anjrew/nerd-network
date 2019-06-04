import React from 'react';
import axios from '../../react_utils/axios';

// Components
import { Row } from '../layout/row';
import { Container } from '../boxes/container';

export class Uploader extends React.Component{

    constructor(props) {
        super(props);
        this.state = {};
    }

    async upload() {
        var formData = new FormData();
        formData.append("file", this.state.file);
        const imageUrl = await axios.post("/upload", formData);
        await this.props.changeImage(imageUrl);
    }

    handleChange(e) {
        this.setState({
            file: e.target.files[0]
        });
    }

    render(){
        return (
            <Container margin="20px" padding='20px' borderRadius="20px" borderWidth="3px">
                <Row justifyContent={'flex-end'} >
                    <button onClick={ this.dismissLoader } style={{ height: '20px', width: '20px', padding: '0px' }}>x</button>
                </Row>
                <h2>Whant to change your image?</h2>
                <button onClick={ this.uploadClicked }>Upload</button>
            </Container>
        );
    }
}