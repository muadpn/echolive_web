import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface IDomainFormButton {
  loading?: boolean;
}

export default function DomainFormButton({ loading }: IDomainFormButton) {
  return (
    <Button type="submit" disabled={loading}>
      {loading ? <Loader2 className="animate-spin" /> : null}Add Domain
    </Button>
  );
}
