import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="container mx-auto p-6 sm:p-8 lg:p-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100 mb-4">
          Welcome to Healthcare Management
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Manage your healthcare services efficiently and effectively.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="hover:shadow-lg transition-shadow bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-purple-600 dark:text-purple-400">
              Patients
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              View and manage patient records.
            </p>
            <Link
              href="/patients"
              className="text-blue-500 dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              Go to Patients
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-green-600 dark:text-green-400">
              Doctors
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              View doctor profiles and availability.
            </p>
            <Link
              href="/doctors"
              className="text-blue-500 dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              Go to Doctors
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-yellow-600 dark:text-yellow-400">
              Appointments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Manage and schedule patient appointments.
            </p>
            <Link
              href="/appointments"
              className="text-blue-500 dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              Go to Appointments
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-pink-600 dark:text-pink-400">
              Analytics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              View healthcare insights and reports.
            </p>
            <Link
              href="/analytics"
              className="text-blue-500 dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              Go to Analytics
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
