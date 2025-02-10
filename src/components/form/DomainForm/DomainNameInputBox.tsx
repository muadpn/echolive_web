import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { type TDomainHookForm } from "@/types/forms.types";

export default function DomainNameInputBox({ form }: TDomainHookForm) {  
  return (
    <FormField
      control={form.control}
      name="DomainUrl"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Domain</FormLabel>
          <FormControl>
            <Input
              placeholder="eg: www.vercel.com"
              {...field}
              value={field.value}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
