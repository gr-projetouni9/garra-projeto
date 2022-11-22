CREATE TABLE IF NOT EXISTS "relation" (
  "id"         VARCHAR(255) PRIMARY KEY,
  "product_id" VARCHAR(255) NOT NULL,
  "related_by" VARCHAR(255) NOT NULL,
  "request_id" VARCHAR(255) NOT NULL,

  "updated_at"  TIMESTAMP NOT NULL,
  "created_at"  TIMESTAMP NOT NULL,

  CONSTRAINT "fk_relation_product"
    FOREIGN KEY ("product_id")
    REFERENCES "product"("id")
    ON DELETE CASCADE,

  CONSTRAINT "fk_relation_request"
    FOREIGN KEY ("request_id")
    REFERENCES "request"("id")
    ON DELETE CASCADE,

  CONSTRAINT "fk_relation_admin"
    FOREIGN KEY ("related_by")
    REFERENCES "admin"("user_id")
    ON DELETE CASCADE
);

