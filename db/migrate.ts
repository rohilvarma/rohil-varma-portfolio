import { migrate } from "drizzle-orm/neon-http/migrator";
import { db } from ".";

const main = async () => {
  try {
    await migrate(db, {
      migrationsFolder: "./db/migrations",
    });
    console.log("Migration Successful!");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

main();