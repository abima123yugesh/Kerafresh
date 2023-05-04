import { message } from "antd";
import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const USER = localStorage.getItem("admin")
    ? JSON.parse(localStorage.getItem("admin")).token
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