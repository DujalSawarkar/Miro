"use client";
import React from "react";
import { AppSidebar } from "../_components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const Dashboard = () => {
  return (
    <div>
      hiii
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger />
      </SidebarProvider>
    </div>
  );
};

export default Dashboard;
