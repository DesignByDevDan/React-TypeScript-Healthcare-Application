import { ReactNode } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

interface DashboardWidgetProps {
  title: string;
  value: string | number;
  icon?: ReactNode; // Optional icon to visually represent the widget
  description?: string; // Optional additional context for the widget
  className?: string; // Optional custom class names
}

export function DashboardWidget({
  title,
  value,
  icon,
  description,
  className,
}: DashboardWidgetProps) {
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
