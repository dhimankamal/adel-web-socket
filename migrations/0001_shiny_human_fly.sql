ALTER TABLE "myTableName" ADD COLUMN "email" text NOT NULL;--> statement-breakpoint
ALTER TABLE "myTableName" ADD CONSTRAINT "myTableName_email_unique" UNIQUE("email");