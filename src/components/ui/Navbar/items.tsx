"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavBarItemProps {
  icon: string;
  navBarPath: string;
}

export const NavBarItem = ({ icon, navBarPath }: NavBarItemProps) => {
  const pathName = usePathname();
  return (
    <Link
      href={navBarPath}
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-md p-2 ${pathName === navBarPath && "bg-active-dark"}`}
    >
      <img src={icon} alt="" className="hover:scale-110" />
    </Link>
  );
};
