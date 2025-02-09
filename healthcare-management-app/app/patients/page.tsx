"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

type Patient = {
  id: string;
  name: string;
  email: string;
  phone: string;
};

const mockPatients: Patient[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    phone: "(123) 456-7890",
  },
  {
    id: "2",
    name: "Emily Carter",
    email: "emily@example.com",
    phone: "(987) 654-3210",
  },
  {
    id: "3",
    name: "Michael Johnson",
    email: "michael@example.com",
    phone: "(555) 123-4567",
  },
];

export default function PatientsPage() {
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    // Simulate fetching patients from an API
    setTimeout(() => {
      setPatients(mockPatients);
    }, 1000);
  }, []);

  return (
    <div className="container mx-auto p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Patients</h1>
        <Link href="/patients/new">
          <Button variant="primary" className="flex items-center gap-2">
            Add New Patient
          </Button>
        </Link>
      </header>

      <p className="text-gray-600 mb-4">Below is a list of all registered patients. Click on "View Details" to learn more about each patient.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {patients.map((patient) => (
          <Card key={patient.id} className="hover:shadow-lg transition">
            <CardHeader>
              <h2 className="text-lg font-semibold">{patient.name}</h2>
            </CardHeader>
            <CardContent>
              <p>Email: {patient.email}</p>
              <p>Phone: {patient.phone}</p>
              <Button variant="outline" className="mt-2">View Details</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
