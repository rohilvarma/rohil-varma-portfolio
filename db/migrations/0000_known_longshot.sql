CREATE TABLE "guestbook" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(100) NOT NULL,
	"comment" text NOT NULL
);
