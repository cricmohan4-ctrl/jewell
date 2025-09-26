import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ShopHeader } from "./ShopHeader";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <ShopHeader />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;