"use client";

import { DoctorCard } from "@/components/DoctorCard";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

type Doctor = {
  id: string;
  name: string;
  specialty: string;
  availability: string;
  imageUrl: string;
};

const mockDoctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. John Smith",
    specialty: "Cardiology",
    availability: "Mon-Fri: 9 AM - 5 PM",
    imageUrl: "/doctor1.jpg",
  },
  {
    id: "2",
    name: "Dr. Emily Brown",
    specialty: "Dermatology",
    availability: "Tue-Thu: 10 AM - 3 PM",
    imageUrl: "/doctor2.jpg",
  },
  {
    id: "3",
    name: "Dr. Michael Taylor",
    specialty: "Pediatrics",
    availability: "Mon, Wed, Fri: 8 AM - 2 PM",
    imageUrl: "/doctor3.jpg",
  },
];

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    // Simulate fetching doctors from an API
    setTimeout(() => {
      setDoctors(mockDoctors);
    }, 1000);
  }, []);

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Doctors</h1>
        <Button variant="primary">Add Doctor</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
}
