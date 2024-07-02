import { NavBarItem } from "@/components/ui/Navbar/items";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <aside className="fixed inset-y-0 left-0 z-10 flex w-20 flex-col justify-between border-r border-secondary-dark bg-primary-dark">
        <nav className="flex flex-col items-center gap-4 bg-primary-dark pt-8">
          <Link
            href="#"
            className="mb-6 flex h-[30px] w-[30px] shrink-0 items-center justify-center gap-2 rounded-full hover:scale-110"
          >
            <img src="/logo/Logomark.png" alt="" />
          </Link>
          <NavBarItem icon="/icons/home.svg" navBarPath="/internal/dashboard" />
          <NavBarItem
            icon="/icons/home.svg"
            navBarPath="/internal/chain/setting"
          />
          <NavBarItem
            icon="/icons/home.svg"
            navBarPath="/internal/deploy/rollup"
          />
          <NavBarItem icon="/icons/home.svg" navBarPath="/internal/" />
          <NavBarItem icon="/icons/home.svg" navBarPath="/internal/" />
        </nav>
        <div className="flex flex-col-reverse items-center gap-4 bg-primary-dark py-6">
          <div className="h-12 w-12">
            <img src="/logo/Logomark.png" alt="" />
          </div>
          <NavBarItem icon="/icons/home.svg" navBarPath="/dashboard" />
          <NavBarItem icon="/icons/home.svg" navBarPath="/dashboard" />
        </div>
      </aside>
      <div className="ml-20">{children}</div>
    </div>
  );
}
