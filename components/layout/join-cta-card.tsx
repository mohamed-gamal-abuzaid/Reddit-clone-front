import Link from "next/link";
import { Button } from "@/components/ui/button";

export function JoinCtaCard() {
    return (
        <div className="rounded-xl border border-border bg-card p-4 space-y-3">
            <p className="text-sm font-medium">Join Reddit</p>
            <p className="text-xs text-muted-foreground">
                Create an account to join communities, post, and vote.
            </p>
            <div className="space-y-2">
                <Link href="/auth/sign-up" className="block">
                    <Button className="w-full rounded-full" size="sm">
                        Sign Up
                    </Button>
                </Link>
                <Link href="/auth/sign-in" className="block">
                    <Button variant="outline" className="w-full rounded-full" size="sm">
                        Log In
                    </Button>
                </Link>
            </div>
        </div>
    );
}