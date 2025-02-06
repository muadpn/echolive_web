"use client";

import { Github } from "lucide-react";
import { Button } from "../ui/button";
import { githubAuth } from "@/app/actions/auth";
import { toast } from "sonner";
import { useId } from "react";
// import { useRouter } from "next/navigation";

export default function GithubAuth() {
  const toastId = useId();
  // const router = useRouter();

  async function handleGithubAuth() {
    toast.loading("Authenticating with github...", { id: toastId });
    const res = await githubAuth();
    // console.log("response: ", res);

    if (res?.error) {
      // console.log(res.error);
      toast.error("Authentication failed!", { id: toastId });
      return;
    }

    toast.success("Authentication successful!", { id: toastId });
  }
  return (
    <Button className="w-full bg-green-700 hover:bg-green-800" onClick={handleGithubAuth}>
      <Github />
      Sign In with Github
    </Button>
  );
}
