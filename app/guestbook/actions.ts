"use server";

import { db } from "@/db";
import { guestbook, InsertComment, SelectComment } from "@/db/schema";

type SuccessState = {
  status: "success";
  data: SelectComment[] | InsertComment[];
};

type ErrorState = {
  status: "error";
  message: string;
  error: string;
};

type ActionResponse = SuccessState | ErrorState;

export async function getComments(): Promise<ActionResponse> {
  try {
    const comments: SelectComment[] = await db.select().from(guestbook);
    return {
      status: "success",
      data: comments,
    } as ActionResponse;
  } catch (err) {
    console.error(err);
    return {
      status: "error",
      message: "Failed to load comments.",
      error: `${err}`,
    };
  }
}

export async function insertComment(payload: InsertComment) {
  try {
    const newComment = await db.insert(guestbook).values(payload).returning();
    return {
      status: "success",
      data: newComment,
    } as ActionResponse;
  } catch (err) {
    console.error(err);
    return {
      status: "error",
      message: `Failed to insert comment.`,
      error: `${err}`
    } as ActionResponse;
  }
}
