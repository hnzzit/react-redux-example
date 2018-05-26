import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;

class Main extends Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
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
          collapsed={this.state.collapsed}
        >
          <div className="logo" />

          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
                <Link to='/weather'>
                  <Icon type="cloud" />
                  <span>近期天气统计</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="table" />
              <span>近期天气图表</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              style={{marginLeft:'16px'}}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 1080 }}>
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Main