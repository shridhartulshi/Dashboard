import { ChevronUp, Home,  User2 } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Dashboard",
    url: "#",
    icon: Home,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="w-64" collapsible="icon">
      <SidebarContent className="bg-[#3eaff5]">
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg font-semibold p-4">DashX</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2 pt-6">
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="  rounded-md">
                  <SidebarMenuButton asChild className="flex  items-center gap-3 text-lg p-6 hover:bg-gray-200  rounded-md  transition">
                    <a href={item.url} className="flex items-center gap-3 w-full">
                      <item.icon className="w-6 h-6 " />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <div className="bg-[#525254]  text-white m-0 p-0">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarMenuButton className="flex items-center text-lg p-8 rounded-none  transition">
            <User2 className="ml-2" /> Username
            <ChevronUp className="ml-auto" />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="top" className="w-[--radix-popper-anchor-width] bg-white p-4 text-black  shadow-lg">
          <DropdownMenuItem className="p-3 hover:bg-gray-200 rounded">Account</DropdownMenuItem>
        
          <DropdownMenuItem className="p-3 hover:bg-red-600 rounded text-red-400 hover:text-white">Sign out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      </div>
    </Sidebar>
  );
}
