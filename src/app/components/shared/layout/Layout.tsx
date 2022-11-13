import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col justify-between font-inter min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
