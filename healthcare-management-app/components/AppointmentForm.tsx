import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface AppointmentFormProps {
  onSubmit: (formData: {
    patientName: string;
    doctorName: string;
    date: string;
    time: string;
  }) => void;
}

export function AppointmentForm({ onSubmit }: AppointmentFormProps) {
  const [formData, setFormData] = useState({
    patientName: "",
    doctorName: "",
    date: "",
    time: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="patientName">Patient Name</Label>
        <Input
          id="patientName"
          name="patientName"
          value={formData.patientName}
          onChange={handleChange}
          placeholder="Enter patient's name"
          required
        />
      </div>

      <div>
        <Label htmlFor="doctorName">Doctor Name</Label>
        <Input
          id="doctorName"
          name="doctorName"
          value={formData.doctorName}
          onChange={handleChange}
          placeholder="Enter doctor's name"
          required
        />
      </div>

      <div>
        <Label htmlFor="date">Date</Label>
        <Input
          id="date"
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="time">Time</Label>
        <Input
          id="time"
          name="time"
          type="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
      </div>

      <Button type="submit" variant="primary">
        Schedule Appointment
      </Button>
    </form>
  );
}
