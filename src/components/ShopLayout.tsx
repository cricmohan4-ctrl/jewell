import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ShopHeader } from "./ShopHeader";

const ShopLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <ShopHeader />
      <main className="flex-grow bg-white">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default ShopLayout;