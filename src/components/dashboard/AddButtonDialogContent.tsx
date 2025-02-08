import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import DomainDetailsForm from "../form/DomainForm/DomainDetailsForm";

export default function AddButtonDialogContent() {
  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Add Website</DialogTitle>
        <DialogDescription>Register your Website</DialogDescription>
      </DialogHeader>
      {/* form */}
      <DomainDetailsForm />
    </DialogContent>
  );
}
