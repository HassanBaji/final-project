/*
  Warnings:

  - You are about to drop the column `date_and_time` on the `Game` table. All the data in the column will be lost.
  - Added the required column `date` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timeFinish` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timeStart` to the `Game` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Game" DROP COLUMN "date_and_time",
ADD COLUMN     "date" TEXT NOT NULL,
ADD COLUMN     "timeFinish" TEXT NOT NULL,
ADD COLUMN     "timeStart" TEXT NOT NULL;
