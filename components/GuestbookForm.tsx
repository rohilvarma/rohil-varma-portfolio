"use client";

import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { useForm } from "react-hook-form";
import { SignOutButton } from "@clerk/nextjs";
import { Label } from "./ui/label";
import { InsertComment } from "@/db/schema";
import { insertComment } from "@/app/guestbook/actions";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

type User = {
  fullName: string;
  firstName: string;
  email: string;
  denyComment: boolean;
};

type FormData = {
  comment: string;
};

const GuestbookForm = ({ fullName, firstName, email, denyComment }: User) => {
  const [isInserting, setIsInserting] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const { toast } = useToast();

  const onSubmit = async (data: FormData) => {
    if (denyComment) {
      toast({
        variant: "destructive",
        title: "Only Single Comments allowed",
        description:
          "You have already commented once, you can only leave one comment",
      });
    } else {
      const newComment: InsertComment = {
        ...data,
        email,
        name: fullName,
      };
      setIsInserting((prev) => !prev);
      const response = await insertComment(newComment);
      if (response.status === "error") {
        console.log("Error", response.error);
        toast({
          variant: "destructive",
          title: response.message,
          description: response.error.includes("unique constraint"),
        });
      } else {
        setIsInserting((prev) => !prev);
        router.refresh();
        toast({
          title: "Success",
          description: `Comment from ${fullName}, successfully entered!`,
        });
      }
    }
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor="message-2">
        Hi {firstName}! Please leave your comment.
      </Label>

      <Textarea
        {...register("comment", {
          required: "Comment is required.",
          disabled: isInserting || denyComment,
          minLength: {
            value: 10,
            message: "Write some more come on!",
          },
        })}
      />
      <p className="text-red-500 text-sm mt-2 mb-4">
        {errors?.comment?.message}
      </p>
      <div className="flex items-stretch gap-2">
        <Button type="submit">Submit</Button>
        <SignOutButton>
          <Button variant="destructive" type="button">
            Sign out
          </Button>
        </SignOutButton>
      </div>
    </form>
  );
};

export default GuestbookForm;
