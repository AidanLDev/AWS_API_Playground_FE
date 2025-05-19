"use client";

import { IButtonProps } from "@/types/props";
import React from "react";

export default function Button({
  label,
  onClick,
  type = "button",
  disabled = false,
}: IButtonProps) {
  return (
    <button
      className="border cursor-pointer py-2 px-4 border-slate-600 rounded-3xl"
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
