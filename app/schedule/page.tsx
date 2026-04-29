import { Calendar } from "./component/calender"
import { events, eventDates } from "./data"

import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarProvider } from "@/components/ui/sidebar"


// You can replace these with real user/role data as needed
export default function CalendarPage() {
  const mockUser = { name: "Admin User", email: "admin@gmail.com", avatar: "/logo2.png" };
  const mockRole = "admin";
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-background text-foreground w-full">
        <AppSidebar role={mockRole} user={mockUser} />
        <div className="flex flex-col flex-1 min-w-0">
          <SiteHeader
            title="Schedule"
            subtitle="Calendar"
            contentClassName="pl-0 pr-4 lg:pr-6"
          />
          <main className="flex-1 w-full py-4 pr-4 pl-0 lg:py-6 lg:pr-6 lg:pl-0 overflow-x-hidden">
            <Calendar events={events} eventDates={eventDates} />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

// import { CalendarMain } from "./component/calender-unified"

// export default function CalendarPage() {
//   return (
//     <div className="px-4 lg:px-6">
//       <CalendarMain />
//     </div>
//   )
// }