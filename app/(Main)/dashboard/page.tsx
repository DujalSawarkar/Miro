"use client";
import React from "react";
import { AppSidebar } from "../_components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { TopNavBar } from "../_components/Navbar";

const Dashboard = () => {
  return (
    <div className="flex">
      <div>
        <SidebarProvider>
          <AppSidebar />
          <SidebarTrigger />
        </SidebarProvider>
      </div>
      <TopNavBar />
    </div>
  );
};

export default Dashboard;
