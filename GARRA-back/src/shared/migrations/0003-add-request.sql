CREATE TABLE IF NOT EXISTS "request" (
  "id"      VARCHAR(255)  PRIMARY KEY,
  "user_id" VARCHAR(255)  NOT NULL,

  "quantity"    INT          NOT NULL,
  "description" TEXT         NOT NULL,

  "updated_at"  TIMESTAMP NOT NULL,
  "created_at"  TIMESTAMP NOT NULL,

  CONSTRAINT "fk_request_user"
  FOREIGN KEY ("user_id")
  REFERENCES "user" ("id")
);
