import React, { useContext } from "react";
import { Menu, Card } from "antd";
import { TagOutlined, LinkOutlined } from "@ant-design/icons";
import {
  Logo,
  SiteLayout,
  SiteBody,
  SiteHeader,
  SiteContent,
  SiteFooter,
  SiteSider,
} from "./styles";
import { Link, useLocation } from "react-router-dom";
import { Context } from "./../../Context";

const CoreApp = ({ children }) => {
  const { title } = useContext(Context);

  const location = useLocation();
  const menuList = [
    {
      key: "links",
      to: "/links",
      name: "Links",
      icon: <LinkOutlined />,
    },
    {
      key: "tags",
      to: "/tags",
      name: "Tags",
      icon: <TagOutlined />,
    },
  ];

  return (
    <SiteLayout style={{ minHeight: "100vh" }}>
      <SiteSider collapsed={true} theme="light">
        <Logo>Save Link</Logo>

        <Menu defaultSelectedKeys={location.pathname} mode="inline">
          {menuList.map((item) => (
            <Menu.Item key={item.key} icon={item.icon} style={{ margin: 0 }}>
              <Link to={item.to}>{item.name}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </SiteSider>

      <SiteBody>
        <SiteHeader>{title}</SiteHeader>

        <SiteContent>
          <Card bordered={false} bodyStyle={{ padding: 0 }}>
            {children}
          </Card>
        </SiteContent>

        <SiteFooter>
          Save link ©2020 Create by {""}
          <a
            href="https://mauriciohernancabrera.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mauricio Hernan Cabrera
          </a>
        </SiteFooter>
      </SiteBody>
    </SiteLayout>
  );
};

export default CoreApp;
