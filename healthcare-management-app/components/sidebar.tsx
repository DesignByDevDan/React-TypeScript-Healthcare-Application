import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Patients", href: "/patients" },
  { name: "Doctors", href: "/doctors" },
  { name: "Appointments", href: "/appointments" },
  { name: "Analytics", href: "/analytics" },
  { name: "Settings", href: "/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white dark:bg-gray-900 p-6 shadow-lg h-screen">
      <h2 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-6">
        Healthcare Management
      </h2>
      <nav>
        <ul className="space-y-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "block px-4 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800",
                  pathname === item.href && "bg-blue-500 text-white dark:bg-blue-600"
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}