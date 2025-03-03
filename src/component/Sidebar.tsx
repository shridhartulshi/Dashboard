import { Link } from "react-router-dom";
import { ChevronUp, Home as HomeIcon, User2 } from "lucide-react";
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

// Menu items with route paths
const items = [
  {
    title: "Home",
    path: "/",
    icon: HomeIcon,
  },
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: HomeIcon,
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
                <SidebarMenuItem key={item.title} className="rounded-md">
                  <SidebarMenuButton asChild className="flex items-center gap-3 text-lg p-6 hover:bg-gray-200 rounded-md transition">
                    <Link to={item.path} className="flex items-center gap-3 w-full">
                      <item.icon className="w-6 h-6" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <div className="bg-[#525254] text-white m-0 p-0">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton className="flex items-center text-lg p-8 rounded-none transition">
              <User2 className="ml-2" /> Username
              <ChevronUp className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="top" className="w-[--radix-popper-anchor-width] bg-white p-4 text-black shadow-lg">
            <DropdownMenuItem className="p-3 hover:bg-gray-200 rounded">Account</DropdownMenuItem>
            <DropdownMenuItem className="p-3 hover:bg-red-600 rounded text-red-400 hover:text-white">Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Sidebar>
  );
}
