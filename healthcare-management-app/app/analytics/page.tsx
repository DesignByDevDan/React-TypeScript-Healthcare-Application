"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

export default function AnalyticsPage() {
  const [metrics, setMetrics] = useState({
    totalPatients: 0,
    appointmentsThisMonth: 0,
    activeDoctors: 0,
    avgAppointmentDuration: "0 min",
  });

  useEffect(() => {
    // Simulate fetching data from an API
    setTimeout(() => {
      setMetrics({
        totalPatients: 128,
        appointmentsThisMonth: 54,
        activeDoctors: 12,
        avgAppointmentDuration: "30 min",
      });
    }, 1000);
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Analytics</h1>
      <p className="text-gray-600 mb-8">Explore insights about patients, appointments, and doctors to track performance and efficiency.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="hover:shadow-lg transition">
          <CardHeader>
            <h2 className="text-lg font-semibold">Total Patients</h2>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-blue-500">{metrics.totalPatients}</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition">
          <CardHeader>
            <h2 className="text-lg font-semibold">Appointments This Month</h2>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-green-500">{metrics.appointmentsThisMonth}</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition">
          <CardHeader>
            <h2 className="text-lg font-semibold">Active Doctors</h2>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-purple-500">{metrics.activeDoctors}</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition">
          <CardHeader>
            <h2 className="text-lg font-semibold">Avg Appointment Duration</h2>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-red-500">{metrics.avgAppointmentDuration}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
