import { Outlet, Navigate } from "react-router-dom";
import { message } from "antd";
import { useState, useEffect } from "react";

const PrivateRoutes = () => {
  const USER = localStorage.getItem("KeraFreshUser")
    ? JSON.parse(localStorage.getItem("KeraFreshUser")).token
    : null;
  const [shownMessage, setShownMessage] = useState(false);

  useEffect(() => {
    if (!USER && !shownMessage) {
      message.error("You must be logged in to access this page", 5);
      setShownMessage(true);
    }
  }, [USER, shownMessage]);

  return USER ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;