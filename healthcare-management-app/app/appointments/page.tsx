"use client";

import AppointmentCard from "@/components/AppointmentCard";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

type Appointment = {
  id: string;
  patientName: string;
  doctorName: string;
  date: string;
  time: string;
  status: "Scheduled" | "Completed" | "Pending";
};

const mockAppointments: Appointment[] = [
  {
    id: "1",
    patientName: "John Doe",
    doctorName: "Dr. Smith",
    date: "2025-02-10",
    time: "10:00 AM",
    status: "Scheduled",
  },
  {
    id: "2",
    patientName: "Emily Carter",
    doctorName: "Dr. Brown",
    date: "2025-02-11",
    time: "2:00 PM",
    status: "Completed",
  },
  {
    id: "3",
    patientName: "Michael Johnson",
    doctorName: "Dr. Taylor",
    date: "2025-02-12",
    time: "9:30 AM",
    status: "Pending",
  },
];

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    // Simulate fetching appointments from an API
    setTimeout(() => {
      setAppointments(mockAppointments);
    }, 1000);
  }, []);

  const handleEdit = (id: string) => {
    alert(`Edit appointment with ID: ${id}`);
  };

  const handleCancel = (id: string) => {
    alert(`Cancel appointment with ID: ${id}`);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Appointments</h1>
        <Button variant="default">Add Appointment</Button>
      </div>

      {appointments.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {appointments.map((appointment) => (
            <AppointmentCard
              key={appointment.id}
              patientName={appointment.patientName}
              doctorName={appointment.doctorName}
              appointmentTime={`${appointment.date}, ${appointment.time}`}
              status={appointment.status === "Scheduled" ? "Upcoming" : appointment.status}
              onEdit={() => handleEdit(appointment.id)}
              onCancel={() => handleCancel(appointment.id)}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No appointments found.</p>
      )}
    </div>
  );
}
