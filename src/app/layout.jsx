
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar"
import { DropdownMenuIcons } from "@/components/ui/DropdownMenuIcons";



export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <DropdownMenuIcons />
        <SidebarProvider>
          <div className="flex w-full min-h-screen">
            <AppSidebar />

            <main className="flex-1">
              <SidebarTrigger />
              {children}
            </main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
