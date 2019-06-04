import React from 'react';

// Components
import { Logo } from '../components/graphics/logo';
import { SafeArea } from '../components/layout/safe_area';
import { CenteredColumn } from '../components/layout/centered_column';

export class App extends React.Component{

    render(){
        return (
            <SafeArea>
                <CenteredColumn>
                    <div className="row" style={{ display: 'flex', justifyContent: 'space-between',  }} >
                        <Logo height={'100px'} width={"100px"}/>
                        <img style={{height: '100px', width: '100px'}} src="" alt={'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj_95OHhdDiAhUB6qQKHRovDpIQjRx6BAgBEAU&url=http%3A%2F%2Fsg-fs.com%2F%3Fattachment_id%3D3273&psig=AOvVaw3sk9HHCpcRXgKslA2gmuKg&ust=1559744998631844'}/>
                    </div>
                </CenteredColumn>
            </SafeArea>
        );
    }
}