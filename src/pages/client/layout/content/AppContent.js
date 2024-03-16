import { Breadcrumb, Layout } from 'antd';
import { useLocation } from 'react-router-dom';
import Routers from "../../../../router/Routers";
import navigationData from "../../../../static/NavData";

const { Content } = Layout;

const AppContent = ({ colorBgContainer, borderRadiusLG }) => {
    const location = useLocation();

    const currentNavItem = navigationData.find(item => item.link === location.pathname);

    // Generate the Breadcrumb items dynamically
    const breadcrumbItems = [
        <Breadcrumb.Item key="/">Bosh sahifa</Breadcrumb.Item>
    ];

    if (currentNavItem) {
        breadcrumbItems.push(
            <Breadcrumb.Item key={currentNavItem.key}>{currentNavItem.label}</Breadcrumb.Item>
        );
    }

    return (
        <Content
            style={{
                padding: '0 48px',
            }}
        >
            <Breadcrumb
                style={{
                    margin: '16px 0',
                }}
            >
                {breadcrumbItems}
            </Breadcrumb>
            <div
                style={{
                    background: colorBgContainer,
                    minHeight: 280,
                    padding: 24,
                    borderRadius: borderRadiusLG,
                }}
            >
                <Routers />
            </div>
        </Content>
    );
};

export default AppContent;
