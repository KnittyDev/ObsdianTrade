import { BackgroundEffects } from "@/app/components/landing";
import { DashboardSidebar } from "@/app/components/dashboard";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-background-dark">
      <BackgroundEffects />
      <DashboardSidebar />
      <main className="relative z-10 min-h-screen pl-0 pt-16 lg:pl-64 lg:pt-0">{children}</main>
    </div>
  );
}
