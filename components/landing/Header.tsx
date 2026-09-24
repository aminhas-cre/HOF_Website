import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";

export function Header() {
  return (
    <header className="border-b border-emerald/10 bg-sand/80 backdrop-blur">
      <div className="container-page flex items-center justify-between py-4">
        <Link href="/" className="font-serif text-lg font-semibold text-emerald">
          {SITE_NAME}
        </Link>
        <Link href="/signup" className="btn-primary">
          Join the community
        </Link>
      </div>
    </header>
  );
}
