import { IUser } from "@/types/interfaces";
import React from "react";

export default function UsersCard({
  email,
  number,
  createdAt,
}: Readonly<Omit<IUser, "id">>) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gradient-to-br from-indigo-800 to-indigo-900 shadow-lg max-w-xs mx-auto flex flex-col items-center">
      <div className="w-16 h-16 rounded-full bg-indigo-500 flex items-center justify-center text-white text-3xl font-bold mb-4">
        <span aria-label="User">👤</span>
      </div>
      <div className="text-xl font-semibold text-slate-200 mb-2">User</div>
      {email && <div className="text-slate-100 text-base mb-1">{email}</div>}
      {number && (
        <div className="bg-slate-100 rounded-md px-3 py-1 text-indigo-500 font-medium text-sm my-2">
          #{number}
        </div>
      )}
      <div className="text-slate-100">{createdAt.split("T")[0]}</div>
    </div>
  );
}
