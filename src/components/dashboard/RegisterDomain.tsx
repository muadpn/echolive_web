"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import { useState } from "react";

interface DomainProps {
  onAddDomain: (domainName: string, domainUrl: string) => void;
}

export default function RegisterDomain({ onAddDomain }: DomainProps) {
  const [domainName, setDomainName] = useState<string>("");
  const [domainUrl, setDomainUrl] = useState<string>("");

  const handleSubmit = () => {
    if (domainName && domainUrl) {
      onAddDomain(domainName, domainUrl); // Pass data to parent
      setDomainName("");
      setDomainUrl(""); // Reset fields after submission
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Your Website</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Website</DialogTitle>
          <DialogDescription>Register your Website</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              App Name
            </Label>
            <Input
              id="name"
              value={domainName}
              onChange={(e) => setDomainName(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="url" className="text-right">
              App URL
            </Label>
            <Input
              id="url"
              value={domainUrl}
              onChange={(e) => setDomainUrl(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="button" onClick={handleSubmit}>
            Add Domain
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
