import { signout } from "@/app/actions/auth";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <div>authenticated
        <Button onClick={signout}>
            logout
        </Button>
    </div>

  )
}
