import { LucideIcon } from "lucide-react";

import { IconBadge } from "@/components/icon-badge"

interface InfoCardProps {
  numberOfItems: number;
  variant?: "default" | "success";
  label: string;
  icon: LucideIcon;
}

export const InfoCard = ({
  variant,
  icon: Icon,
  numberOfItems,
  label,
}: InfoCardProps) => {
  return (
    <div className="border rounded-md flex items-center gap-x-2 p-3 bg-sky-100">
      <IconBadge
        variant={variant}
        icon={Icon}
      />
      <div>
        <p className="font-bold text-2xl text-blue-900">
          {label}
        </p>
        <p className="text-gray-800 text-md">
          {numberOfItems} {numberOfItems === 1 ? "Course" : "Courses"}
        </p>
      </div>
    </div>
  )
}