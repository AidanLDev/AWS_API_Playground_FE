import React from "react";
import { INavItem } from "@/types/interfaces";
import NavItem from "./NavItem";

const navItems: INavItem[] = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Admin",
    link: "/admin",
  },
];

export default function Nav() {
  return (
    <nav>
      {navItems.map(({ label, link }) => (
        <NavItem label={label} link={link} key={`${label}__${link}`} />
      ))}
    </nav>
  );
}
