import type { Metadata } from "next";
import Link from "next/link";
import { SignupForm } from "@/components/signup/SignupForm";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Join the community | ${SITE_NAME}`,
  robots: { index: false, follow: false },
};

export default function SignupPage() {
  return (
    <main className="container-page max-w-2xl py-12 sm:py-16">
      <Link href="/" className="font-serif text-sm text-emerald">
        &larr; {SITE_NAME}
      </Link>
      <h1 className="mt-4 font-serif text-3xl font-semibold text-emerald">
        Join the community
      </h1>
      <p className="mt-2 text-ink/70">
        A few quick questions so we can point you to the right resources and
        the right conversations.
      </p>
      <div className="mt-8">
        <SignupForm />
      </div>
    </main>
  );
}
