import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="text-9xl font-bold text-foreground">404</h1>
      <p className="mt-4 text-2xl font-semibold">Page Not Found</p>
      <p className="mt-2 text-muted-foreground">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <div className="mt-8">
        <Link href="/" className="">
          <Button
            variant={"ghost"}
            className="cursor-pointer bg-muted dark:bg-white text-foreground dark:text-accent-foreground"
          >
            Go Back to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
}
