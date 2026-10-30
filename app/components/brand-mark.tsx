
import { MapPin } from "lucide-react";

export function BrandMark() {
  return (
    <span
      aria-label="AdugboHub"
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-700 to-red-600 shadow-lg shadow-purple-950/30"
    >
      <MapPin size={23} strokeWidth={2.2} className="text-white" />
    </span>
  );
}
