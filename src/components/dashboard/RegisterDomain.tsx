import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import AddButtonDialogContent from "./AddButtonDialogContent";

// interface DomainProps {
//   onAddDomain: (domainName: string, domainUrl: string) => void;
// }

export default function RegisterDomain(
  // { onAddDomain }: DomainProps
) {
  // const [domainName, setDomainName] = useState<string>("");
  // const [domainUrl, setDomainUrl] = useState<string>("");

  // const handleSubmit = () => {
  //   if (domainName && domainUrl) {
  //     onAddDomain(domainName, domainUrl); // Pass data to parent
  //     setDomainName("");
  //     setDomainUrl(""); // Reset fields after submission
  //   }
  // };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Your Website</Button>
      </DialogTrigger>
      <AddButtonDialogContent />
    </Dialog>
  );
}
