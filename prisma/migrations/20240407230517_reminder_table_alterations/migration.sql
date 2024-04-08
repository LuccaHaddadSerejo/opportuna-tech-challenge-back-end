/*
  Warnings:

  - You are about to drop the column `created_at` on the `reminders` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `reminders` table. All the data in the column will be lost.
  - Added the required column `time` to the `reminders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "reminders" DROP COLUMN "created_at",
DROP COLUMN "updated_at",
ADD COLUMN     "time" TIME NOT NULL,
ALTER COLUMN "date" SET DATA TYPE DATE;
