import styled from "styled-components";
import { COLOR_LIGHT } from "./../../styles/variables";
import { Layout } from "antd";

export const SiteLayout = styled(Layout)`
  min-height: 100vh;
`;

export const SiteBody = styled(Layout)`
  background-color: ${COLOR_LIGHT};
`;

export const SiteSider = styled(Layout.Sider)`
  border-right: 1px solid #f0f0f0;
`;

export const SiteHeader = styled(Layout.Header)`
  padding-left: 32px;
  box-shadow: 0 2px 8px #f0f1f2;
  background-color: ${COLOR_LIGHT};
`;

export const SiteContent = styled(Layout.Content)`
  margin: 16px;
`;

export const SiteFooter = styled(Layout.Footer)`
  text-align: center;
  background-color: ${COLOR_LIGHT};
`;

export const Logo = styled.div`
  height: 64px;
  background: rgba(255, 255, 255, 0.2);
  color: ${COLOR_LIGHT};
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;
