ALTER TABLE "guestbook" ADD COLUMN "email" varchar(100) NOT NULL;--> statement-breakpoint
ALTER TABLE "guestbook" ADD CONSTRAINT "guestbook_email_unique" UNIQUE("email");