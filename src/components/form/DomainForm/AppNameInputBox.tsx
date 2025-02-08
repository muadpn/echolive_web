import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { type TDomainHookForm } from "@/types/forms.types";
  
  
export default function AppNameInputBox({ form }:TDomainHookForm) {
  return (
    <FormField
      control={form.control}
      name="AppName"
      render={({ field }) => (
        <FormItem>
          <FormLabel>App Name</FormLabel>
          <FormControl>
            <Input placeholder="Your App name" {...field} value={field.value}/>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
