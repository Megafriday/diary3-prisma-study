-- CreateTable
CREATE TABLE "diaries" (
    "id" SERIAL NOT NULL,
    "write_date" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "body" TEXT NOT NULL,
    "weather" VARCHAR(20) NOT NULL,
    "users_id" INTEGER NOT NULL,

    CONSTRAINT "diaries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(10) NOT NULL,
    "gender" VARCHAR(1) NOT NULL,
    "job" VARCHAR(20),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comments" (
    "comment_id" SERIAL NOT NULL,
    "diaries_id" INTEGER NOT NULL,
    "comment" VARCHAR(200) NOT NULL,
    "users_id" INTEGER,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("comment_id")
);

-- AddForeignKey
ALTER TABLE "diaries" ADD CONSTRAINT "diaries_users_id_fkey" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_diaries_id_fkey" FOREIGN KEY ("diaries_id") REFERENCES "diaries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_users_id_fkey" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
