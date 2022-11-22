CREATE TABLE IF NOT EXISTS "user" (
  "id"          VARCHAR(255)  PRIMARY KEY,

  "email"       VARCHAR(255)  NOT NULL  UNIQUE,
  "full_name"   VARCHAR(255)  NOT NULL,
  "password"    VARCHAR(255)  NOT NULL,

  "avatar"      BYTEA, --Blob equivalent

  "updated_at"  TIMESTAMP NOT NULL,
  "created_at"  TIMESTAMP NOT NULL
);
