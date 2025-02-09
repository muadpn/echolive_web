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
import { api } from "@/trpc/react";
import { toast } from "sonner";
import { useId } from "react";

export default function DomainDetailsForm() {
  const form = useForm<TDomainDetailsFormValidator>({
    resolver: zodResolver(DomainDetailsFormValidator),
    defaultValues: {
      DomainUrl: "",
      AppName: "",
    },
  });
  const toastId = useId();

  const { mutate: addDomainDetails, isPending } =
    api.supabase.addUserDomainDetails.useMutation({
      onMutate() {
        toast.loading("Adding domain details...", { id: toastId });
      },
      onError({ message }) {
        toast.error(message,{id:toastId});
        // @TODO handle error properly 
      },
      onSuccess() {
        toast.success("Domain details added successfully!", { id: toastId });
        form.reset({
          AppName: '',
          DomainUrl: ''
        })
      },
    });

  async function onSubmit(values: TDomainDetailsFormValidator) {
    addDomainDetails(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <DomainNameInputBox form={form} />
        <AppNameInputBox form={form} />
        <DomainFormButton loading={isPending} />
      </form>
    </Form>
  );
}
