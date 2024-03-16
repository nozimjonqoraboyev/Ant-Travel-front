import { Link, useLocation } from "react-router-dom";
import { Menu } from "antd";
import navigationData from "../../../../../static/NavData";

const NavigationMenu = () => {
    const location = useLocation();

    const activeRouteKey = navigationData.find(item => item.link === location.pathname)?.key || '1';

    return (
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[activeRouteKey]}
            style={{
                flex: 1,
                minWidth: 0,
            }}
        >
            {navigationData.map(item => (
                <Menu.Item key={item.key}>
                    <Link to={item.link}>{item.label}</Link>
                </Menu.Item>
            ))}
        </Menu>
    );
};

export default NavigationMenu;
