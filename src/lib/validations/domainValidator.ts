import { z } from "zod";

export type TDomainDetailsFormValidator = z.infer<
  typeof DomainDetailsFormValidator
>;

export const DomainDetailsFormValidator = z.object({
  AppName: z
    .string({required_error: 'App name cannot be empty'})
    .min(2, { message: "App name must be at least 2 characters long" })
    .max(50, { message: "App name cannot exceed 50 characters" })
    .regex(/^[a-zA-Z0-9\s\-_]+$/, {
      message:
        "App name can only contain letters, numbers, spaces, hyphens and underscores",
    }),

  DomainUrl: z
  .string({required_error: 'Domain cannot be empty'})
  .regex(
      /^(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,
      {
        message: "Please enter a valid domain name (e.g., example.com)",
      },
    )
    .toLowerCase(),
});
