"use client";

import { cn } from "@/lib/utils";

interface Avatar {
  imageUrl?: string; // Optional for default avatar fallback
  profileUrl?: string; // Optional for clickable profile links
}
interface AvatarCirclesProps {
  className?: string;
  size?: number; // Avatar size
  numPeople?: number; // Additional people count
  avatarUrls: Avatar[];
}

export const AvatarCircles = ({
  size = 40, // Default size
  numPeople,
  className,
  avatarUrls,
}: AvatarCirclesProps) => {
  const defaultAvatar = "/default-avatar.png"; // Path to a default avatar image

  return (
    <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
      {avatarUrls.map((avatar, index) => (
        <a
          key={index}
          href={avatar.profileUrl || "#"} // Default to `#` if no profile URL
          target={avatar.profileUrl ? "_blank" : undefined}
          rel={avatar.profileUrl ? "noopener noreferrer" : undefined}
        >
          <img
            className={cn(
              "rounded-full border-2 border-white dark:border-gray-800",
              `h-${size} w-${size}`
            )}
            src={avatar.imageUrl || defaultAvatar}
            width={size}
            height={size}
            alt={`Avatar ${index + 1}`}
          />
        </a>
      ))}
      {(numPeople ?? 0) > 0 && (
        <a
          className={cn(
            "flex items-center justify-center rounded-full border-2 border-white bg-black text-center text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-white dark:text-black",
            `h-${size} w-${size}`
          )}
          href=""
        >
          +{numPeople}
        </a>
      )}
    </div>
  );
};
