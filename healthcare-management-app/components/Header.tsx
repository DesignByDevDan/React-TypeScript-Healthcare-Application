import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="w-full bg-white dark:bg-gray-900 py-4 shadow-md">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/">
          <a className="text-xl font-bold text-blue-500 dark:text-blue-400">
            Healthcare Management App
          </a>
        </Link>
        <nav className="flex space-x-4">
          <Link href="/patients">
            <a className="text-sm text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">
              Patients
            </a>
          </Link>
          <Link href="/doctors">
            <a className="text-sm text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">
              Doctors
            </a>
          </Link>
          <Link href="/appointments">
            <a className="text-sm text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">
              Appointments
            </a>
          </Link>
          <Link href="/analytics">
            <a className="text-sm text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">
              Analytics
            </a>
          </Link>
          <Link href="/settings">
            <a className="text-sm text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">
              Settings
            </a>
          </Link>
        </nav>
        <Button variant="outline">Log Out</Button>
      </div>
    </header>
  );
}