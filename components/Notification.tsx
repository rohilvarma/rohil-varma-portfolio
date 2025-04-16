"use client";

import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";

type NotificationProps = {
  variant?: "default" | "destructive";
  title: string;
  message: string;
};

const Notification = ({
  variant = "default",
  title,
  message,
}: NotificationProps) => {
  const { toast } = useToast();

  useEffect(() => {
    toast({
      variant,
      title,
      description: message,
      duration: 3000,
      position: "top-right"
    });
  }, [variant, title, message, toast]);

  return null;
};

export default Notification;
