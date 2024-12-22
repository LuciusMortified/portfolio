'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeSwitch } from "./theme-switch";

const navItems = {
  "/": { name: "Обо мне" },
  "/blog": { name: "Блог" },
  "/projects": { name: "Проекты" },
};

export function Navbar() {
  const path = usePathname();

  return (
    <nav className="lg:mb-16 mb-12 py-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex"></div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
          {Object.entries(navItems).map(([itemPath, { name }]) => (
            <Link
              key={itemPath}
              href={itemPath}
              className={`transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative ${itemPath === path ? 'underline' : ''}`}
            >
              {name}
            </Link>
          ))}
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
