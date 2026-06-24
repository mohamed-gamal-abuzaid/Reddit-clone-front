import { Bell, Search } from "lucide-react";
import Link from "next/link";
import { Input } from "../ui/input";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
            <div className="mx-auto flex h-14 max-w-[1200px] items-center px-4">
            {/* Logo - أقصى الشمال */}
            <Link 
                href="/" 
                className="flex shrink-0 items-center gap-2 text-lg font-semibold tracking-tight text-foreground"
            >
                <span className="flex size-8 items-center justify-center" aria-hidden>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="32" height="32">
                        <circle cx="10" cy="10" r="10" fill="#FF4500"/>
                        <path fill="white" d="M16.67 10a1.46 1.46 0 0 0-2.47-1 7.12 7.12 0 0 0-3.85-1.23l.65-3.08 2.13.45a1 1 0 1 0 1-.97 1 1 0 0 0-.96.68l-2.38-.5a.16.16 0 0 0-.19.12l-.73 3.44a7.14 7.14 0 0 0-3.89 1.23 1.46 1.46 0 1 0-1.61 2.39 2.87 2.87 0 0 0 0 .44c0 2.24 2.61 4.06 5.83 4.06s5.83-1.82 5.83-4.06a2.87 2.87 0 0 0 0-.44 1.46 1.46 0 0 0 .64-1.53zM7.27 11a1 1 0 1 1 1 1 1 1 0 0 1-1-1zm5.58 2.65a3.57 3.57 0 0 1-2.85.86 3.57 3.57 0 0 1-2.85-.86.19.19 0 0 1 .27-.27 3.21 3.21 0 0 0 2.58.71 3.21 3.21 0 0 0 2.58-.71.19.19 0 0 1 .27.27zm-.17-1.65a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/>
                    </svg>
                </span>
                <span className="text-lg">Reddit</span>
            </Link>

            {/* Search - في النص */}
            <div className="relative mx-8 hidden max-w-xl flex-1 md:block">
                <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                    readOnly
                    placeholder="Search posts..."
                    className="h-10 w-full rounded-full border-border bg-card pl-10 pr-16 text-sm"
                    aria-label="Search posts"
                />
            </div>

            {/* Buttons - أقصى اليمين */}
            <div className="ml-auto flex shrink-0 items-center gap-2">
                <Link
                    href="/auth/sign-in"
                    className={cn(buttonVariants({ variant: "ghost", size: "default" }))}
                >
                    Log In
                </Link>
                <Link
                    href="/auth/sign-up"
                    className={cn(buttonVariants({ variant: "default" }))}
                >
                    Sign Up
                </Link>
            </div>
        </div>
        </header>
    );
}