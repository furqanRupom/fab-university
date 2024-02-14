import { FC } from "react";

import {  Layout } from "antd";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import { useAppDispatch } from "../../hooks/hooks";
import { logout } from "../../redux/features/auth/authSlice";
import { Header } from "antd/es/layout/layout";

const { Content, Footer } = Layout;

// const items = [
//   UserOutlined,
//   VideoCameraOutlined,
//   UploadOutlined,
//   UserOutlined,
// ].map((icon, index) => ({
//   key: String(index + 1),
//   icon: createElement(icon),
//   label: `nav ${index + 1}`,
// }));
/*
const items: MenuProps["items"] = [
  {
    key: "Dashboard",
    label: <NavLink to="/admin/dashboard">dashboard</NavLink>,
  },

  {
    key: " user management",
    label: "User Management",
    children: [
      {
        key: "Create Student",
        label: <NavLink to="/admin/create-student">Create Student</NavLink>,
      },
      {
        key: "Create Faculty",
        label: <NavLink to="/admin/create-faculty">Create Faculty</NavLink>,
      },
      {
        key: "Create Admin",
        label: <NavLink to="/admin/create-admin">Create Admin</NavLink>,
      },
    ],
  },
];

*/


const MainLayout:FC = () => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <Layout>
      <Sidebar />
      <Layout style={{ minHeight: "100svh" }}>
        <Header>
          <button style={{ width: "70px" }} onClick={handleLogout}>
            Logout
          </button>
        </Header>

        <Content>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
