
import Image from "next/image";
import Link from "next/link";

interface BrandMarkProps {
  onClick?: () => void;
  className?: string;
}

export default function BrandMark({
  onClick,
  className = "",
}: BrandMarkProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="AdugboHub homepage"
      className={`inline-flex shrink-0 items-center ${className}`}
    >
      <Image
        src="/images/logo2.png"
        alt="AdugboHub — Your Community, Connected"
        width={600}
        height={180}
        priority
        className="h-12 w-auto object-contain sm:h-14"
      />
    </Link>
  );
}
