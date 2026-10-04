import Footer from "../../shared-pages/footer/Footer";
import Navbar from "../../shared-pages/navbar/Navbar";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
