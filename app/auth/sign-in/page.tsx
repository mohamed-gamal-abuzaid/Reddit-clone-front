"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function SignInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    function handleSubmit() {
        // TODO: اتصل بـ Spring Boot API هنا
        console.log({ email, password });
    }

    return (
        <div className="flex min-h-[100dvh] items-center justify-center px-4 bg-background">
            <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-lg space-y-6">
                
                {/* Header */}
                <div className="text-center space-y-1">
                    <h1 className="text-2xl font-bold">Log In</h1>
                    <p className="text-sm text-muted-foreground">
                        By continuing, you agree to our{" "}
                        <span className="text-primary cursor-pointer hover:underline">User Agreement</span>{" "}
                        and acknowledge our{" "}
                        <span className="text-primary cursor-pointer hover:underline">Privacy Policy</span>.
                    </p>
                </div>

                {/* Social Buttons */}
                <div className="space-y-3">
                    <Button variant="outline" className="w-full rounded-full gap-2">
                        <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 20 3.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 .8 7.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 0 16.407a11.615 11.615 0 0 0 6.29 1.84"/>
                        </svg>
                        Continue with Phone Number
                    </Button>

                    <Button variant="outline" className="w-full rounded-full gap-2">
                        <svg viewBox="0 0 24 24" className="size-5">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        Continue with Google
                    </Button>

                    <Button variant="outline" className="w-full rounded-full gap-2">
                        <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
                            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
                        </svg>
                        Continue with Apple
                    </Button>
                </div>

                <div className="flex items-center gap-3">
                    <Separator className="flex-1" />
                    <span className="text-xs text-muted-foreground">OR</span>
                    <Separator className="flex-1" />
                </div>

                {/* Form */}
                <div className="space-y-4">
                    <Input
                        type="email"
                        placeholder="Email or username *"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="rounded-xl bg-muted border-0 h-12"
                    />

                    <div className="relative">
                        <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password *"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="rounded-xl bg-muted border-0 h-12 pr-10"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        >
                            {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
                        </button>
                    </div>

                    <div className="text-sm text-primary hover:underline cursor-pointer">
                        Forgot password?
                    </div>

                    <p className="text-sm text-muted-foreground">
                        New to Reddit?{" "}
                        <Link href="/auth/sign-up" className="text-primary hover:underline">
                            Sign Up
                        </Link>
                    </p>

                    <Button className="w-full rounded-full h-12" onClick={handleSubmit}>
                        Log In
                    </Button>
                </div>
            </div>
        </div>
    );
}