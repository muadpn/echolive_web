import { type TDomainDetailsFormValidator } from "@/lib/validations/domainValidator";
import { type UseFormReturn } from "react-hook-form";

export type TDomainHookForm = {
    form: UseFormReturn<TDomainDetailsFormValidator>;
  };
  