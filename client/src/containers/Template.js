import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import NavDrawer from '../components/NavDrawer';
import { Header, Main, Image, ImageDiv } from '../styled/template';
//import Img from 'react-image';
import logo from '../../dist/assets/img/schlogo.png';

injectTapEventPlugin();

class Template extends Component {
    render() {
        return(
            <MuiThemeProvider>
                <div>
                    <NavDrawer/>
                    <ImageDiv>
                        <Image src={logo}/>
                    </ImageDiv>
                    <Header>
                        Project Quality Indicator
                    </Header>
                    <Main>
                        {this.props.children}
                    </Main>
                </div>
            </MuiThemeProvider>
        );   // return
    }   // render()
}   // class Template extends Component

export default Template;