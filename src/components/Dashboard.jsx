import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Main from "./Main";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex">
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div className="h-screen flex-1 p-0 min-h-full">
        <Header />
        <Main />
      </div>
    </div>
  );
};

export default Dashboard;
