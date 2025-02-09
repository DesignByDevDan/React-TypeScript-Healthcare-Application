import { Card, CardHeader, CardContent } from "@/components/ui/card";

interface AnalyticsCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode; // Optional icon
  description?: string; // Optional description for additional context
  className?: string; // Optional custom styles
}

export function AnalyticsCard({
  title,
  value,
  icon,
  description,
  className,
}: AnalyticsCardProps) {
  return (
    <Card className={`hover:shadow-lg transition ${className}`}>
      <CardHeader className="flex items-center gap-4">
        {icon && <div className="text-xl text-blue-500">{icon}</div>}
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
          {title}
        </h2>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
          {value}
        </p>
        {description && (
          <p className="text-sm text-gray-500 mt-2 dark:text-gray-400">
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  );
}