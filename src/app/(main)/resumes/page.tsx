import { Button } from "@/components/ui/button";
import { PlusSquare } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Your Resumes",
}



export default function ResumesPage() {
  return (
    <main className="mx-auto max-w-7xl w-full px-3 py-6 space-y-6">
      <Button asChild className="mx-auto flex w-fit gap-2">
        <Link href="/editor">
          <PlusSquare className="size-5" />
          New Resume
        </Link>
      </Button>

    </main>
  );
} 