"use client";

import Link from "next/link";
import { IconType } from "react-icons";
import { cn } from "../_utils/general";

interface SidebarItemProps {
  Icon: IconType;
  label: string;
  href: string;
  active?: boolean;
}

export const SidebarItem = ({
  label,
  Icon,
  href,
  active,
}: SidebarItemProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex flex-row h-auto items-center text-md gap-x-4 font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1 ",
        active && "text-white"
      )}
    >
      <Icon size={26} />
      <p className="truncate w-full">{label}</p>
    </Link>
  );
};
