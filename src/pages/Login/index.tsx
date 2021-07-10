import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Form, Input, Button } from 'antd';


const Login: React.FC = () => {

    const [username, setUsername] = useState("Anonymous");
    const [password, setPassword] = useState("password");

    const history = useHistory();

    const onFinish = () => {
        fetch("https://thebetter.bsgroup.eu/Authorization/SignIn", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accept": "application/json",
            },
            body: "{}",
        })
            .then(response => response.json())
            .then(data => {
                const token = JSON.stringify(data.AuthorizationToken.Token).slice(1, -1);
                localStorage.setItem('token', token);
                history.push('/home')
            })
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <Card style={{ marginTop: "2%", width: "50%", marginLeft: "auto", marginRight: "auto" }}>
            <Form
                name="basic"
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 20 }}
                style={{ marginLeft: "auto", marginRight: "auto", width: "80%", textAlign: "right", marginTop: "3%", paddingRight: "5%" }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input
                        type="text"
                        value={username}
                        placeholder={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password
                        value={password}
                        placeholder={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
}

export default Login;