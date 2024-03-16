import React, {Component} from "react";
import {Layout} from "antd";
const { Footer } = Layout;

class AppFooter extends Component {
    render() {
        return (
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Sayohatchi.uz ©{new Date().getFullYear()} Farobiy IT Akademiyasining Java Web dasturchilari tomonidan yaratilgan
            </Footer>
        );
    }
}
export default AppFooter;