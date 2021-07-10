import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Typography } from 'antd';
import { useHistory } from 'react-router-dom';

const { Header } = Layout;
const { Title } = Typography;

const AppHeader: React.FC = () => {

    const history = useHistory();

    const handleClick = () => {
        history.push('/home')
    }

    return (
        <Header>
            <div style={{ width: "200px", float: "left" }}>
                <Title level={4} style={{ color: "#ffffff", paddingTop: "18px", paddingLeft: "20px" }} onClick={handleClick}>BSG - Player</Title>
            </div>
            <Menu theme="dark" mode="horizontal">
                <Menu.Item id='offers-btn' key='offers'>
                    Home
                    <Link to='/home' />
                </Menu.Item>
            </Menu>
        </Header>
    )
};

export default AppHeader;