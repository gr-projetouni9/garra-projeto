CREATE TABLE IF NOT EXISTS "admin" (
  "user_id"    VARCHAR(255) PRIMARY KEY,

  "register"   VARCHAR(255) NOT NULL  UNIQUE,

  "updated_at"  TIMESTAMP NOT NULL,
  "created_at"  TIMESTAMP NOT NULL,

  CONSTRAINT "fk_admin_user"
  FOREIGN KEY ("user_id")
  REFERENCES "user"("id")
);

