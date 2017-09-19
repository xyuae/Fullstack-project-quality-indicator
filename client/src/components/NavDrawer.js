import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import { Link } from 'react-router';
import { NavToggleButton } from '../styled/NavDrawer';

class NavDrawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            width: 250,
        };   // this.state
    }   // constructor(props)

    toggle = () => {
        this.setState((prevStat) => {
            return {
                open: !prevStat.open
            };  // return
        }); // setState
    }   // toggle callback

    render() {
        return (
            <div>
                <NavToggleButton
                    toggle={this.toggle}
                    width={this.state.width}
                    open={this.state.open}
                />
                <Drawer
                    open={this.state.open}
                    width={this.state.width}
                >
                    <Link
                        to={'/'}
                    >
                        <MenuItem
                            onTouchTap={this.toggle}
                            primaryText={'Home'}
                        />
                    </Link>
                    <Link
                        to={'/add-project'}
                    >
                        <MenuItem
                            onTouchTap={this.toggle}
                            primaryText={'Add project'} 
                        />
                    </Link>
                    <Link
                        to={'/project-list'}
                    >
                        <MenuItem
                            onTouchTap={this.toggle}
                            primaryText={'View project'}
                        />
                    </Link>
                </Drawer>
            </div>
        );  // return
    }   // render
}   // class NavDrawer extends Component

export default NavDrawer;