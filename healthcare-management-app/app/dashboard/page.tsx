import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Marquee } from "@/components/magicui/marquee";
import { AnimatedCircularProgressBar } from "@/components/magicui/animated-circular-progress-bar";
import { UsersIcon, CalendarIcon, ChartBarIcon, UserIcon } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* Announcements Marquee */}
      <Marquee
        className="bg-blue-100 text-blue-800 rounded-lg shadow p-4 mb-6"
        pauseOnHover
        reverse={false}
        repeat={1}
      >
        <span>📢 System maintenance scheduled for tomorrow!</span>
        <span>🩺 Book your annual check-up today!</span>
      </Marquee>

      {/* Metrics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold mb-2">Total Patients</h3>
          <AnimatedCircularProgressBar
            value={75}
            max={100}
            min={0}
            gaugePrimaryColor="#4CAF50"
            gaugeSecondaryColor="#D3D3D3"
            label="Active Patients"
            className="w-40 h-40"
          />
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold mb-2">Today's Appointments</h3>
          <AnimatedCircularProgressBar
            value={50}
            max={100}
            min={0}
            gaugePrimaryColor="#2196F3"
            gaugeSecondaryColor="#D3D3D3"
            label="Completed"
            className="w-40 h-40"
          />
        </div>
      </div>

      {/* Navigation Grid */}
      <BentoGrid>
        <BentoCard
          name="Patients"
          Icon={UsersIcon}
          description="View and manage patient records."
          href="/patients"
          cta="Manage Patients"
        />
        <BentoCard
          name="Doctors"
          Icon={UserIcon}
          description="View doctor profiles and availability."
          href="/doctors"
          cta="View Doctors"
        />
        <BentoCard
          name="Appointments"
          Icon={CalendarIcon}
          description="Manage and schedule appointments."
          href="/appointments"
          cta="Manage Appointments"
        />
        <BentoCard
          name="Analytics"
          Icon={ChartBarIcon}
          description="View insights and performance metrics."
          href="/analytics"
          cta="View Analytics"
        />
      </BentoGrid>
    </div>
  );
}
