import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";

interface DoctorCardProps {
  name: string;
  specialty: string;
  availability: string;
  imageUrl: string;
  onViewDetails: () => void;
}

export function DoctorCard({
  name,
  specialty,
  availability,
  imageUrl,
  onViewDetails,
}: DoctorCardProps) {
  return (
    <Card className="hover:shadow-lg transition">
      <CardHeader className="flex items-center gap-4">
        <img
          src={imageUrl}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border border-gray-300"
        />
        <div>
          <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            {name}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">{specialty}</p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          <strong>Availability:</strong> {availability}
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" onClick={onViewDetails} className="w-full">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}
