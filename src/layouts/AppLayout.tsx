import React from "react";
import { Layout, Space } from "antd";
import { Link, Outlet } from "react-router-dom";
import "./style.css";
import SiderApp from "../components/SiderApp";
import {
  CheckSquareOutlined,
  MessageOutlined,
  TeamOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
const { Header, Footer, Sider, Content } = Layout;

const AppLayout: React.FC = () => (
  <Space
    className="app-container"
    direction="vertical"
    style={{ width: "100%" }}
  >
    <Layout>
      <Sider className="sider-app" width={80}>
        {/* <SiderApp /> */}
        <div>
          <img
            src="https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg"
            alt="Avatar"
            width="60"
            height="60"
            className="img-avatar"
          />
        </div>
        <div className="message-menu">
          <Space direction="vertical">
            <Link to={"/message"}>
              <MessageOutlined />
            </Link>
            <Link to={"/"}>
              <TeamOutlined />
            </Link>
            <Link to={"/"}>
              <CheckSquareOutlined />
            </Link>
            <Link to={"/"}>
              <VideoCameraOutlined />
            </Link>
          </Space>
        </div>
      </Sider>
      <Layout>
        <Header className="header-app">Header</Header>
        <Content className="content-app">
          <Outlet />
        </Content>
        <Footer className="footer-app">Footer</Footer>
      </Layout>
    </Layout>
  </Space>
);

export default AppLayout;
