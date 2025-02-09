"use client";

import { useEffect} from "react";
import { toast } from "sonner";

interface IGenerateToastErr {
//   message: string;
  authFailed: boolean;
//   config?: ExternalToast;
  // type: string
}
export default function GenerateToastErr({
//   message,
//   config,
  authFailed,
}: IGenerateToastErr) {
//   const customToaster = useId();
  useEffect(() => {
    if (authFailed) {
      toast.error("Authentication Failed, please try again..."
        //  { ...config, id: customToaster }
        );
    }
  }, [ authFailed]);
  return null;
}
