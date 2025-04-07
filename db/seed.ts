import { db } from ".";
import { guestbook, InsertComment } from "./schema";

const cleanComments = async () => {
  console.log("Deleting all comments from  guestbook.");
  try {
    await db.delete(guestbook);
    console.log("Comments deletion successful.");
  } catch (err) {
    console.error(err);
    console.log("Comments deletion terminated.");
  }
};

const seedComments = async () => {
  const dummyComments: InsertComment[] = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Jane Doe",
      email: "jane.doe@example.com",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Alice Smith",
      email: "alice.smith@example.com",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Bob Johnson",
      email: "bob.johnson@example.com",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  console.log("Seeding commments.");
  try {
    await db.insert(guestbook).values(dummyComments);
    console.log("Comments seeded successfully.");
  } catch (err) {
    console.error(err);
    console.log("Comments seeding terminated.");
  }
};

const main = async (type: string) => {
  switch (type) {
    case "comments":
      await seedComments();
      break;
    case "deleteComments":
      await cleanComments();
      break;
    default:
      console.log("Invalid type");
      break;
  }
};

main("comments");
