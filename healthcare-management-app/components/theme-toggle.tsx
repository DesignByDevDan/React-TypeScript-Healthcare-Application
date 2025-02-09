"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react"; // Light/Dark mode icons

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensures the toggle button renders correctly on the client
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="flex items-center gap-2 px-3 py-2 border rounded-md shadow-sm transition bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
    >
      {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
      <span className="text-sm">{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
    </button>
  );
}
