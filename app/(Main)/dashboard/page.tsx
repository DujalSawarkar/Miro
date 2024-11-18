"use client";
import React from "react";
import { AppSidebar } from "../_components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { TopNavBar } from "../_components/Navbar";
import {
  CreateOrganization,
  OrganizationList,
  useClerk,
  useOrganization,
} from "@clerk/nextjs";
import { AlertCircle, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import NoOrg from "../_components/EmptyBoards/No-Org";

const Dashboard = () => {
  const { organization } = useOrganization();
  // console.log(organization);
  return (
    <div className="flex">
      <div>
        <SidebarProvider>
          <AppSidebar />
          {/* <SidebarTrigger /> */}
        </SidebarProvider>
      </div>
      <div className="w-full overflow-hidden">
        <TopNavBar />
        <div className="p-4  h-[100%] flex flex-col justify-center items-center">
          {organization ? <div>org Boards</div> : <NoOrg />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
