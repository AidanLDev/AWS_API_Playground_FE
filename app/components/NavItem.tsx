import React from "react";
import { INavItem } from "@/types/interfaces";

export default function NavItem({ link, label }: INavItem) {
  return <a href={link}>{label}</a>;
}
