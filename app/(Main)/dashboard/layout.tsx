"use client";

import React from "react";
import { AppSidebar } from "../_components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { TopNavBar } from "../_components/Navbar";
import { useOrganization } from "@clerk/nextjs";
import NoOrg from "../_components/EmptyBoards/No-Org";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { organization } = useOrganization();

  return (
    <div className="flex">
      <div>
        <SidebarProvider>
          <AppSidebar />
        </SidebarProvider>
      </div>
      <div className="w-full">
        <TopNavBar />
        <div className="p-6">{organization ? children : <NoOrg />}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
