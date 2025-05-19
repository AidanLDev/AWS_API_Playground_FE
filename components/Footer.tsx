import React from "react";

export default function Footer() {
  return (
    <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      <a href="https://aidanlowson.com" target="_blank">
        © Aidan Lowson - {new Date().toISOString().split("T")[0].split("-")[0]}
      </a>
    </footer>
  );
}
