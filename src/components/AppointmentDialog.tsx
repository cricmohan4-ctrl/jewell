"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AppointmentForm } from "./AppointmentForm";

type AppointmentDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  branch: string;
};

export const AppointmentDialog = ({ open, onOpenChange, branch }: AppointmentDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Book an Appointment</DialogTitle>
          <DialogDescription>
            Confirm your details to book an appointment at our {branch} branch.
          </DialogDescription>
        </DialogHeader>
        <AppointmentForm branch={branch} onSuccess={() => onOpenChange(false)} />
      </DialogContent>
    </Dialog>
  );
};