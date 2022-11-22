CREATE TABLE IF NOT EXISTS "product" (
  "id"          VARCHAR(255)  PRIMARY KEY,
  "created_by"  VARCHAR(255)  NOT NULL,

  "quantity"    INT           NOT NULL,
  "barcode"     VARCHAR(255)  NOT NULL UNIQUE,
  "name"        VARCHAR(255)  NOT NULL UNIQUE,

  "updated_at"  TIMESTAMP NOT NULL,
  "created_at"  TIMESTAMP NOT NULL,

  CONSTRAINT "fk_product_admin"
  FOREIGN KEY ("created_by")
  REFERENCES "admin"("user_id")
);
