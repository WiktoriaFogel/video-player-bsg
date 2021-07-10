import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Typography, Card, Image } from 'antd';

const { Title } = Typography;

const Splash: React.FC = () => {

    const history = useHistory();

    const handleClickLogin = () => {
        history.push('/login')
    }

    return (
        <Card style={{ marginTop: "2%", width: "60%", marginLeft: "auto", marginRight: "auto", height: "450px" }}>
            <div style={{ textAlign: "center" }}>
                <Image src="https://static.thenounproject.com/png/392650-200.png"></Image>
                <Title level={3}>Welcome in BSG-Player</Title>
                <Button type="primary" size="large" style={{ marginTop: "70px" }} onClick={handleClickLogin}>Sign In</Button>
            </div>
        </Card>
    );
}

export default Splash;