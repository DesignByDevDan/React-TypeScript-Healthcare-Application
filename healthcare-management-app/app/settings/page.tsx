import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition">
          <CardHeader>
            <h2 className="text-lg font-semibold">Profile Settings</h2>
          </CardHeader>
          <CardContent>
            <p>Update your personal information and change your password.</p>
            <Button variant="outline" className="mt-2">Edit Profile</Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition">
          <CardHeader>
            <h2 className="text-lg font-semibold">Notification Settings</h2>
          </CardHeader>
          <CardContent>
            <p>Manage how you receive notifications and alerts.</p>
            <Button variant="outline" className="mt-2">Manage Notifications</Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition">
          <CardHeader>
            <h2 className="text-lg font-semibold">Account Security</h2>
          </CardHeader>
          <CardContent>
            <p>Review and update your account security settings.</p>
            <Button variant="outline" className="mt-2">Update Security</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
