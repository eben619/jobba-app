import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Header";
import { AppProvider } from '@/providers/AppProvider';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <Footer />
    </div>
  );
};

export default Layout;
