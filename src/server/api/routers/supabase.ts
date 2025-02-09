import { DomainDetailsFormValidator } from "@/lib/validations/domainValidator";
import { adminProcedure, createTRPCRouter } from "../trpc";
import { createClient } from "@/utils/supabase/server";
import { TRPCError } from "@trpc/server";
import { generateApiKey } from "@/lib/helper/crypto";

export const supabaseRouter = createTRPCRouter({
  addUserDomainDetails: adminProcedure
    .input(DomainDetailsFormValidator)
    .mutation(async ({ input: { AppName, DomainUrl } }) => {
      try {
        const supabase = await createClient();

        // checks if either of input values exists in table of the user
        const { data: domainData } = await supabase
          .from("website_details")
          .select("domain,appName")
          .or(`domain.eq.${DomainUrl},appName.eq.${AppName}`);

        if (domainData?.length) {
          throw new TRPCError({
            code: "CONFLICT",
            message: "Domain or app name already exists",
          });
        }

        // Adding Domain details in website details table
        const { data: generatedId, error: insertDomainError } = await supabase
          .from("website_details")
          .insert({
            accessLevel: "",
            appName: AppName,
            domain: DomainUrl,
            role: "",
            status: "idle",
          })
          .select("id");

        if (insertDomainError) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            cause: "Server error",
          });
        }

        // checking if returned value contains generated table id
        if (!generatedId[0]?.id) {
          throw new TRPCError({
            code: "CLIENT_CLOSED_REQUEST",
            message: "Failed to return domain details",
          });
        }

        const domain_api_key = generateApiKey();

        // creates new identifier table linking with website_details table
        const { error } = await supabase.from("Identifier").insert({
          domain_api_key,
          website_details_id: generatedId[0]?.id,
          status: "idle",
        });

        if (error) {
          console.log(error);
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            cause: "Server error",
          });
        }
      } catch (error) {
        console.log(error);
        throw new TRPCError({
          code: "BAD_GATEWAY",
          message: "Internal Server error",
        });
      }
    }),
});
