import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
interface Props {
  children: React.ReactNode;
}
export default function Layout({ children }: Props) {
  return (
    <div className="antialiased">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
