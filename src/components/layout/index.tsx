'use client';

import React, { useState } from 'react';
import { Layout } from 'antd';

const { Header, Content, Sider } = Layout;


const AppLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: 'gray' }} />
        <Content style={{ margin: '0 16px', background: 'yellow' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            Bill is a cat.
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;