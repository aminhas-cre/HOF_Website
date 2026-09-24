import Link from "next/link";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-emerald/10 py-10">
      <div className="container-page flex flex-col gap-4 text-sm text-ink/60 sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {SITE_NAME}
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/disclaimer" className="hover:text-emerald">
            Disclaimer
          </Link>
          <Link href="/privacy" className="hover:text-emerald">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-emerald">
            Terms of Use
          </Link>
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-emerald">
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </footer>
  );
}
