import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import StickyCallBar from "./StickyCallBar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
      <StickyCallBar />
    </div>
  );
};

export default Layout;
