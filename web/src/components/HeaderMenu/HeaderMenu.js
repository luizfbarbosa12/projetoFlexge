import React from "react";
import { Button, Menu } from "antd";

import {
  DashboardOutlined,
  ProfileOutlined,
  UserOutlined,
  FolderOutlined,
  BookOutlined,
  FolderOpenOutlined,
  TrophyOutlined,
  FilterOutlined,
  SettingOutlined,
  DollarOutlined,
  MessageOutlined,
  DesktopOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";

const HeaderMenu = () => {
  const menuItems = [
    { label: "Dashboard", key: 0, icon: <DashboardOutlined /> },
    { label: "Profile", key: 1, icon: <ProfileOutlined /> },
    { label: "Admin", key: 2, icon: <UserOutlined /> },
    { label: "Basic Register", key: 3, icon: <FolderOutlined /> },
    { label: "Content", key: 4, icon: <BookOutlined /> },
    { label: "Academic", key: 5, icon: <FolderOpenOutlined /> },
    { label: "Ranking", key: 6, icon: <TrophyOutlined /> },
    { label: "Reports", key: 7, icon: <FilterOutlined /> },
    { label: "Config", key: 8, icon: <SettingOutlined /> },
    { label: "Payments", key: 9, icon: <DollarOutlined /> },
    { label: "Messages", key: 10, icon: <MessageOutlined /> },
    { label: "KPIs", key: 11, icon: <DesktopOutlined /> },
    {
      label: "",
      key: 12,
      icon: (
        <Button style={{ marginLeft: "16rem" }}>
          <PoweroffOutlined />
        </Button>
      ),
    },
  ];
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      items={menuItems.map((item) => {
        return {
          label: `${item.label}`,
          icon: item.icon,
          key: item.key
        };
      })}
    >
      <Button>
        <PoweroffOutlined />
      </Button>
    </Menu>
  );
};

export default HeaderMenu;
