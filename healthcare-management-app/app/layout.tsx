import "./globals.css";
import Link from "next/link";
import { ThemeProvider } from "./providers/theme-provider";
import ThemeToggle from "@/components/theme-toggle"; // Import the ThemeToggle component

export const metadata = {
  title: "Healthcare Management App",
  description: "Manage healthcare services efficiently and effectively",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <ThemeProvider>
          {/* Navigation Bar */}
          <nav className="bg-white dark:bg-gray-800 shadow-md">
            <div className="container mx-auto p-4 flex items-center justify-between">
              {/* App Title */}
              <h1 className="text-2xl font-bold text-blue-500">
                Healthcare Management
              </h1>

              {/* Navigation Links */}
              <div className="flex items-center gap-4">
                <Link href="/" className="text-blue-500 hover:underline">
                  Home
                </Link>
                <Link
                  href="/patients"
                  className="text-blue-500 hover:underline"
                >
                  Patients
                </Link>
                <Link href="/doctors" className="text-blue-500 hover:underline">
                  Doctors
                </Link>
                <Link
                  href="/appointments"
                  className="text-blue-500 hover:underline"
                >
                  Appointments
                </Link>
                <Link href="/analytics" className="text-blue-500 hover:underline">
                  Analytics
                </Link>
                <Link href="/settings" className="text-blue-500 hover:underline">
                  Settings
                </Link>

                {/* Dark Mode Toggle Button */}
                <ThemeToggle />
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <main className="container mx-auto p-4 sm:p-6 lg:p-8">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
