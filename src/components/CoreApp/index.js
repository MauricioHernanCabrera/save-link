import React, { useState } from "react";
import { Layout, Menu, Card } from "antd";
import { TagOutlined, LinkOutlined } from "@ant-design/icons";
import { Logo } from "./styles";
import { Link } from "react-router-dom";

const { Header, Sider, Content, Footer } = Layout;

const CoreApp = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <Logo collapsed={collapsed}>Save Link</Logo>

        <Menu theme="dark" defaultSelectedKeys={["links"]} mode="inline">
          <Menu.Item key="links" icon={<LinkOutlined />}>
            <Link to="/links">Links</Link>
          </Menu.Item>

          <Menu.Item key="tags" icon={<TagOutlined />}>
            <Link to="/tags">Tags</Link>
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "16px" }}>
          <Card className="site-layout-background">{children}</Card>
        </Content>

        <Footer style={{ textAlign: "center" }}>
          Save link ©2018 Creado por{" "}
          <a
            href="https://mauriciohernancabrera.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mauricio Hernan Cabrera
          </a>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default CoreApp;
