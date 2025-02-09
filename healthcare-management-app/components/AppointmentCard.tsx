"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface AppointmentCardProps {
  patientName: string;
  doctorName: string;
  appointmentTime: string;
  status: "Upcoming" | "Completed" | "Cancelled";
  onEdit?: () => void;
  onCancel?: () => void;
}

export default function AppointmentCard({
  patientName,
  doctorName,
  appointmentTime,
  status,
  onEdit,
  onCancel,
}: AppointmentCardProps) {
  const statusColors = {
    Upcoming: "bg-blue-500 text-white",
    Completed: "bg-green-500 text-white",
    Cancelled: "bg-red-500 text-white",
  };

  return (
    <Card className="w-full shadow-md">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>{patientName}</span>
          <Badge className={`${statusColors[status]}`}>{status}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          <strong>Doctor:</strong> {doctorName}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          <strong>Time:</strong> {appointmentTime}
        </p>
        <div className="mt-4 flex justify-end gap-2">
          {onEdit && (
            <Button variant="outline" onClick={onEdit}>
              Edit
            </Button>
          )}
          {onCancel && (
            <Button variant="destructive" onClick={onCancel}>
              Cancel
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
