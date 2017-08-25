import { Layout, Menu, Icon } from 'antd';
import React from 'react';
import { Component } from 'react';
import App from './App.js';
const { Header, Sider, Content } = Layout;

export default class ScopeLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        };
    }
  
  toggle() {
      this.setState({
          collapsed: !this.state.collapsed,
      });
  }
  render() {
      return (
          <Layout>
              <Sider
                  trigger={null}
                  collapsible
                  collapsed={this.state.collapsed}>

                  <div className="logo" />
                  <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                      <Menu.Item key="1">
                          <Icon type="user" />
                          <span>Scope</span>
                      </Menu.Item>
                      <Menu.Item key="2">
                          <Icon type="video-camera" />
                          <span>Domain</span>
                      </Menu.Item>
                      <Menu.Item key="3">
                          <Icon type="upload" />
                          <span>App Scope</span>
                      </Menu.Item>
                  </Menu>
              </Sider>
              <Layout>
                  <Header style={{ background: '#fff', padding: 0 }}>
                      <Icon
                          className="trigger"
                          type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                          onClick={this.toggle.bind(this)}
                      />
                  </Header>
                  <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                      <App/>
                  </Content>
              </Layout>
         </Layout>
      );
  }
}