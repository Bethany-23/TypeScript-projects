// app/dashboard/page.tsx
"use client";

import { Sidebar, SidebarProvider, SidebarContent } from "@/components/organisms/SideBar";
import { TopNavbar } from "@/components/organisms/TopNavbar";
import { Card } from "@/components/molecules/Card";
import { AdvancedTable } from "@/components/organisms/AdvancedTable";
import { TypographyH2, TypographyH3 } from "@/components/atoms/Typography";
import { Button } from "@/components/atoms/Button";
import { NavigationMenu } from "@radix-ui/react-navigation-menu";

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 fixed h-full">
          <Sidebar>
            {/* Optional: Avatar at top */}
            <div className="p-4">
              <TypographyH2>Admin</TypographyH2>
            </div>

            {/* Navigation menu */}
            <SidebarContent>
              <NavigationMenu />
              {/* Badges / quick indicators */}
              <div className="p-4 space-y-2">
                <Button variant="secondary" size="sm">New Task</Button>
              </div>
            </SidebarContent>
          </Sidebar>
        </aside>

        {/* Main content area */}
        <div className="flex-1 flex flex-col ml-64">
          {/* Top Navbar */}
          <header className="fixed top-0 left-64 right-0 h-16 bg-white border-b border-gray-200 z-10 flex items-center justify-between px-6">
            <TopNavbar />
          </header>

          {/* Scrollable content */}
          <main className="flex-1 mt-16 overflow-y-auto p-6 space-y-6 bg-gray-50">
            {/* KPI Cards */}
            <div className="grid grid-cols-3 gap-4">
              <Card>
                <TypographyH3>Users</TypographyH3>
                <TypographyH3>1,245</TypographyH3>
              </Card>
              <Card>
                <TypographyH3>Revenue</TypographyH3>
                <TypographyH3>$12,340</TypographyH3>
              </Card>
              <Card>
                <TypographyH3>Tasks</TypographyH3>
                <TypographyH3>87</TypographyH3>
              </Card>
            </div>

            {/* Example Action */}
            <Button>Add New Item</Button>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
