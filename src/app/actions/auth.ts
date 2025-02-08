"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

interface AuthResponse {
  error: null | string;
  success: boolean;
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  data: unknown | null;
}

export async function signup(formData: FormData): Promise<AuthResponse> {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signUp({
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    options: {
      data: {
        name: formData.get("name") as string,
      },
    },
  });

  // console.log("data:", data);

  if (error) {
    // console.log(error.message);
    return {
      data: null,
      error: "Signup failed please try again",
      success: false,
    };
  }
  return {
    data,
    error: null,
    success: true,
  };
}

export async function signin(formData: FormData): Promise<AuthResponse> {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  });

  return {
    data,
    error: error?.message ?? null,
    success: !error,
  };
}

export async function signout(): Promise<void> {
  const supabase = await createClient();

  await supabase.auth.signOut();

  redirect("/auth/signin");
}

export async function githubAuth() {
  /**
   * NOTE:
   * - Currently github auth is done via personal github and supabase account
   * - Whenever using production supabase and domain, you need to check the below mentioned points
   *      - change the redirect url and main website url in github OAUTH page,
   *        supabase configuration under authentication section and the env before commit
   *
   * */
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: `${process.env.DOMAIN}/auth/callback`,
    },
  });

  if (error) {
    return { error };
  }

  // console.log(data);

  if (data.url) {
    redirect(data.url); // use the redirect API for your server framework
  }
}
