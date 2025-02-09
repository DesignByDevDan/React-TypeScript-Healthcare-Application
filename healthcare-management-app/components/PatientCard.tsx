import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";

interface PatientCardProps {
  name: string;
  age: number;
  condition: string;
  lastVisit: string;
  imageUrl: string;
  onViewDetails: () => void;
}

export function PatientCard({
  name,
  age,
  condition,
  lastVisit,
  imageUrl,
  onViewDetails,
}: PatientCardProps) {
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
          <p className="text-sm text-gray-500 dark:text-gray-400">Age: {age}</p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          <strong>Condition:</strong> {condition}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          <strong>Last Visit:</strong> {lastVisit}
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
