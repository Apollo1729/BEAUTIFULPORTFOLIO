import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // default to dark

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    // If no stored theme, default to dark for first-time users
    if (!storedTheme) {
      localStorage.setItem("theme", "dark");
    }

    const shouldBeDark = storedTheme !== "light";
    setIsDarkMode(shouldBeDark);

    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light"); // ✅ was incorrectly saving "dark"
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-0.75 rounded-full transition-colors duration-300", // ✅ "transitions-colors" → "transition-colors"
        "focus:outline-hidden" // ✅ "outlin-hidden" → "outline-hidden"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};