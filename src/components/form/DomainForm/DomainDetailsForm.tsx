"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  DomainDetailsFormValidator,
  type TDomainDetailsFormValidator,
} from "@/lib/validations/domainValidator";
import { Form } from "@/components/ui/form";
import AppNameInputBox from "./AppNameInputBox";
import DomainNameInputBox from "./DomainNameInputBox";
import DomainFormButton from "./DomainFormButton";

export default function DomainDetailsForm() {
  const form = useForm<TDomainDetailsFormValidator>({
    resolver: zodResolver(DomainDetailsFormValidator),
    defaultValues:{
      DomainUrl:"",
      AppName: ""
    }
  });

  async function onSubmit(values: TDomainDetailsFormValidator) {
    console.log(values);
    // const supabase = await createClient()
    // supabase.from('website_details').insert({})
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <DomainNameInputBox form={form} />
        <AppNameInputBox form={form} />
        <DomainFormButton />
      </form>
    </Form>
  );
}
