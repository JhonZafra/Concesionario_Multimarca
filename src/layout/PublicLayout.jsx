import Footer from "components/Footer";
import Navbar from "components/Navbar";
import React from "react";
import { useDarkMode } from "context/darkmode";

const PublicLayout = ({ children }) => {
  const { darkMode } = useDarkMode();
  return (
    <div className="flex flex-col  justify-between h-screen">
      <Navbar />
      <div className="h-full overflow-y-scroll ">
        <main className={`flex h-full bg-gray-${darkMode ? '900' : '20'}`}> {children} </main>
        <Footer />
      </div>
    </div>
  );
};

export default PublicLayout;
