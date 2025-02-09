import { DomainDetailsFormValidator } from "@/lib/validations/domainValidator";
import { adminProcedure, createTRPCRouter } from "../trpc";
import { createClient } from "@/utils/supabase/server";
import { TRPCError } from "@trpc/server";

export const supabaseRouter = createTRPCRouter({
  addUserDomainDetails: adminProcedure
    .input(DomainDetailsFormValidator)
    .mutation(async ({ input }) => {
      const supabase = await createClient();
      const { error } = await supabase.from("website_details").insert({
        accessLevel: "",
        appName: input.AppName,
        domain: input.DomainUrl,
        role: "",
        status: "idle",
      });

      if (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          cause: "Server error",
        });
      }
    }),
});
