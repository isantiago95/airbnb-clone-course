"use client";

import { actionFunction } from "@/utils/types";
import { useFormState } from "react-dom";
import { useToast } from "@/components/ui/use-toast";
import React from "react";

const initialState = {
  message: "",
};

function FormContainer({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) {
  const [state, formAction] = useFormState(action, initialState);

  const { toast } = useToast();

  React.useEffect(() => {
    console.log("typeof state message: ", typeof state.message);

    if (typeof state.message === "string") {
      toast({ description: state.message });
    } else {
      state.message.forEach((message: string) => {
        toast({ description: message });
      });
    }
  }, [state]);

  return <form action={formAction}>{children}</form>;
}

export default FormContainer;
