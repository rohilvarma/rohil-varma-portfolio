import GuestbookForm from "@/components/GuestbookForm";
import Title from "@/components/Title";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { FaGithub } from "react-icons/fa6";
import { getComments } from "./actions";
import Notification from "@/components/Notification";

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
      <Title title="GuestBook Works!" />
      <div className="mt-4">
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
