/*
  Warnings:

  - You are about to alter the column `description` on the `reminders` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(30)`.
  - Made the column `description` on table `reminders` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "reminders" ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "description" SET DATA TYPE VARCHAR(30);
