import React from 'react';
import { Layout, theme } from 'antd';
import AppContent from "./content/AppContent";
import AppHeader from "./header/AppHeader";
import AppFooter from "./footer/AppFooter";



const MyLayout = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout>
            <AppHeader/>
            <AppContent/>
            <AppFooter/>
        </Layout>
    );
};
export default MyLayout;