import GuestbookForm from "@/components/GuestbookForm";
import Notification from "@/components/Notification";
import Title from "@/components/Title";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { Metadata } from "next";
import { FaGithub } from "react-icons/fa6";
import { getComments } from "./actions";

export const metadata: Metadata = {
  title: "Guestbook | Rohil Varma",
  description: "If you know me or follow my works or if you just liked what you see.",
};

const GuestbookPage = async () => {
  const user = await currentUser();
  const response = await getComments();
  const denyComment =
    response.status === "success" &&
    response.data.some(
      (r) => r.email === user?.primaryEmailAddress?.emailAddress,
    );

  const renderComments = () => {
    if (response.status === "error") {
      return (
        <div>
          <Notification
            variant="destructive"
            title={response.error}
            message={response.message}
          />
          <div className="text-red-500">{response.message}</div>
        </div>
      );
    }
    return response.data.map((comment, index) => {
      return (
        <div className="" key={index}>
          <p className="text-neutral-600 font-bold">{comment.name}:</p>
          <p className="">{comment.comment}</p>
        </div>
      );
    });
  };

  return (
    <main className="">
      <Title title={`Don't be shy! Leave a note!`} />
      <p className="text-primary mb-4">
        Found something interesting? Like what you see? Drop a note and let me
        know your thoughts!
      </p>
      <div className="">
        <SignedOut>
          <SignInButton mode="modal">
            <Button variant="secondary">
              <FaGithub /> Sign In to leave a comment
            </Button>
          </SignInButton>
        </SignedOut>
      </div>
      <div className="">
        <SignedIn>
          <GuestbookForm
            fullName={user?.fullName ?? ""}
            firstName={user?.firstName ?? ""}
            email={user?.primaryEmailAddress?.emailAddress ?? ""}
            denyComment={denyComment}
          />
        </SignedIn>
      </div>
      <div className="flex flex-col gap-8 py-8">{renderComments()}</div>
    </main>
  );
};
export default GuestbookPage;
