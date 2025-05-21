"use client";

import { useState, useTransition } from "react";
import Button from "./inputs/Button";
import { getRoot } from "@/generalActions";

export default function TestAPI() {
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  async function action(formData: FormData) {
    startTransition(async () => {
      try {
        const res = await getRoot(formData);
        setMessage(res.message);
      } catch (err) {
        console.error(err);
        setMessage("Failed to fetch message.");
      }
    });
  }

  return (
    <form action={action}>
      <Button label="Test API" disabled={isPending} type="submit" />
      {message && (
        <p className="py-4">{`${
          isPending ? "Loading..." : `Message: ${message}`
        }`}</p>
      )}
    </form>
  );
}
