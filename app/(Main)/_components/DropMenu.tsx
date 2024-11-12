"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { OrganizationList } from "@clerk/clerk-react";

export function DropMenu() {
  const [position, setPosition] = React.useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">See Organisations</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-0 bg-transparent border-none">
        <OrganizationList
          afterCreateOrganizationUrl="/dashboard/:slug"
          afterSelectPersonalUrl="/user/:id"
          afterSelectOrganizationUrl="/dashboard/:slug"
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
