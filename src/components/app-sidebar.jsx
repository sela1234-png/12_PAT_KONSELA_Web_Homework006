import * as React from "react"
import { VersionSwitcher } from "@/components/version-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Blocks, BookOpen, Settings, User, Users } from "lucide-react";


const data = {
  versions: [],
  navMain: [
    {
      icon: <Blocks />,
      title: "Products",
    },
    {
      icon: <Users />,
      title: "Customer",
    },
    {
      icon: <BookOpen />,
      title: "Category",
    },
    {
      icon: <Settings />,
      title: "Setting",
    },
  ],
}

export function AppSidebar({
  ...props
}) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher versions={data.versions} defaultVersion={data.versions[0]} />
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel className="flex items-center gap-2 w-full h-[50px] rounded-3xl hover:bg-blue-200 transition-all">
              <span className="text-blue-500 ">{item.icon}</span>
              <span className="text-xl">{item.title}</span>
            </SidebarGroupLabel>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
