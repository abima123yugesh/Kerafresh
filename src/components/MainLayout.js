import React, { useState } from "react";
import { Layout, Menu, theme, Avatar, message } from "antd";
import { Link, useNavigate, Outlet } from "react-router-dom";
import { MdOutlineProductionQuantityLimits, MdDashboard } from "react-icons/md";
import { AiOutlineFileAdd, AiOutlineUnorderedList } from "react-icons/ai";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { IoBagCheck } from "react-icons/io5";
import { GiGps } from "react-icons/gi";
import { RiQuestionnaireFill } from "react-icons/ri";
import { logout, resetState } from "../features/admin/adminSlice";
import { useDispatch, useSelector } from "react-redux";
import { Spin } from "antd";

const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { authState } = useSelector((state) => state.admin);
  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await dispatch(logout());
      setTimeout(() => {
        message.success("Logout Successfull");
        dispatch(resetState());
        navigate("/");
        setIsLoggingOut(false);
      }, 1000);
    } catch (error) {
      message.error("Failed to Sign out. Please try again!");
      setIsLoggingOut(false);
    }
  };

  return (
    <>
      <Spin spinning={isLoggingOut} tip="Logging out...">
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo sider-header-background">
              <h2 className="text-white fs-5 text-center py-3 mb-0">
                <span className="sm-logo">KF</span>
                <span className="lg-logo">Kera Fresh</span>
              </h2>
            </div>
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={[""]}
              onClick={({ key }) => {
                if (key === "signout") {
                } else {
                  navigate(key);
                }
              }}
              items={[
                {
                  key: "",
                  icon: <MdDashboard className="fs-4" />,
                  label: "Dashboard",
                },
                {
                  key: "product",
                  icon: <MdOutlineProductionQuantityLimits className="fs-4" />,
                  label: "Product",
                  children: [
                    {
                      key: "add-product",
                      icon: <AiOutlineFileAdd className="fs-4" />,
                      label: "Add Product",
                    },
                    {
                      key: "product-list",
                      icon: <AiOutlineUnorderedList className="fs-4" />,
                      label: "Product List",
                    },
                   
                   
                  ],
                },
                {
                  key: "orders",
                  icon: <IoBagCheck className="fs-4" />,
                  label: "Orders",
                },
                {
                  key: "order-tracking",
                  icon: <GiGps className="fs-4" />,
                  label: "Order Tracking",
                },
                {
                  key: "enquiry",
                  icon: <RiQuestionnaireFill className="fs-4" />,
                  label: "Enquiries",
                },
              ]}
            />
          </Sider>
          <Layout className="site-layout">
            <Header
              className="d-flex justify-content-between ps-1 pe-5"
              style={{
                padding: 0,
                background: colorBgContainer,
              }}
            >
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: () => setCollapsed(!collapsed),
                }
              )}
              <div className="d-flex gap-4 align-items-center">
                <div className="d-flex gap-3 align-items-center dropdown">
                  <div>
                    <Avatar
                      width={32}
                      height={32}
                      src="https://via.placeholder.com/64"
                      alt="profile"
                    />
                  </div>
                  <div
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <h5 className="mb-0 text-white">Admin</h5>
                    <p className="mb-0 text-white">admin@gmail.com</p>
                  </div>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <li>
                      <Link
                        className="dropdown-item dropdownpro"
                        onClick={() => handleLogout()}
                      >
                        Sign Out
                      </Link>
                    </li>
                  </div>
                </div>
                {/* <Modal
              title={isLoading ? "Logging out..." : "Sign Out"}
              open={logoutModalVisible}
              onOk={() => {
                setTimeout(() => {
                  setLogoutModalVisible(false);
                  handleLogout();
                }, 2000);
              }}
              onCancel={() => setLogoutModalVisible(false)}
            >
              <p>Are you sure you want to sign out?</p>
            </Modal> */}
              </div>
            </Header>
            <Content
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
                background: colorBgContainer,
              }}
            >
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </Spin>
    </>
  );
};

export default MainLayout;