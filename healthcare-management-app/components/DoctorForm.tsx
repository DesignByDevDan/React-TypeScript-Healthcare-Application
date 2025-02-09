import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface DoctorFormProps {
  onSubmit: (formData: {
    name: string;
    specialty: string;
    availability: string;
    imageUrl: string;
  }) => void;
}

export function DoctorForm({ onSubmit }: DoctorFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    availability: "",
    imageUrl: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
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
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter doctor's name"
          required
        />
      </div>

      <div>
        <Label htmlFor="specialty">Specialty</Label>
        <Input
          id="specialty"
          name="specialty"
          value={formData.specialty}
          onChange={handleChange}
          placeholder="Enter doctor's specialty"
          required
        />
      </div>

      <div>
        <Label htmlFor="availability">Availability</Label>
        <Input
          id="availability"
          name="availability"
          value={formData.availability}
          onChange={handleChange}
          placeholder="Enter availability (e.g., Mon-Fri: 9 AM - 5 PM)"
          required
        />
      </div>

      <div>
        <Label htmlFor="imageUrl">Profile Image URL</Label>
        <Input
          id="imageUrl"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          placeholder="Enter image URL"
        />
      </div>

      <Button type="submit" variant="primary">
        Save Doctor
      </Button>
    </form>
  );
}