"use client";

import { SignupForm } from "@/components/auth/signup/SignupForm";
import { Suspense } from "react";

export default function SignupPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="container flex min-h-screen items-center justify-center py-8">
        <div className="w-full max-w-[800px]">
          <div className="mb-8 space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight">
              Create your account
            </h1>
            <p className="text-muted-foreground">
              Join Career Hub to kickstart your professional journey
            </p>
          </div>
          <SignupForm />
        </div>
      </div>
    </Suspense>
  );
}
