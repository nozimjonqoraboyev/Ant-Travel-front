import React, {Component} from "react";
import NavigationMenu from "./navmenu/NavigationMenu";
import {Layout} from "antd";
const { Header } = Layout;

class AppHeader extends Component {
    render() {
        return (
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <div className="demo-logo"/>
                <NavigationMenu/>
            </Header>
        );
    }
}

export default AppHeader;