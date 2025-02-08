"use client";

import { Github, Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import { githubAuth } from "@/app/actions/auth";
import { toast } from "sonner";
import { useId, useState } from "react";
// import { useRouter } from "next/navigation";

export default function GithubAuth() {
  const [loading, setIsLoading] = useState(false);
  const toastId = useId();
  // const router = useRouter();

  async function handleGithubAuth() {
    // toast.loading("Authenticating with github...", {
    //   id: toastId,
    //   duration: 100,
    // });
    setIsLoading(true)
    const res = await githubAuth();
    // console.log("response: ", res);

    if (res?.error) {
      // console.log(res.error);
      toast.error("Authentication failed!", { id: toastId });
      setIsLoading(false)
      return;
    }

    // toast.success("Authentication successful!", { id: toastId });
  }
  return (
    <Button
      className="w-full bg-green-700 hover:bg-green-800"
      onClick={handleGithubAuth}
      disabled={loading}
    >
      {loading ? <Loader2 className="animate-spin "/>: ''}
      <Github />
      Sign In with Github
    </Button>
  );
}
