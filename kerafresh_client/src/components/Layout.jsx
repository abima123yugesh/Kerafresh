import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Topbar from "./Topbar";

function Layout() {
  return (
    <div>
      <header className="ltn__header-area ltn__header-5 ltn__header-transparent-- gradient-color-4---">
        <Topbar />
        <Navbar />
      </header>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
