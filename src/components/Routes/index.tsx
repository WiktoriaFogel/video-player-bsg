import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import Home from '../../pages/Home';
import Player from '../../pages/Player';
import Login from '../../pages/Login';
import Splash from '../../pages/Splash';
import AppHeader from '../AppHeader'

const { Content } = Layout;

const Routes: React.FC = () => {

    return (
        <Layout style={{ height: "100vh" }}>
            <AppHeader />
            <Content style={{ padding: '0 50px' }}>
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/player" component={Player} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/" component={Splash} />
                </Switch>
            </Content>
        </Layout>
    )
};

export default Routes;
