/*
  Warnings:

  - You are about to drop the column `teams` on the `Game` table. All the data in the column will be lost.
  - Added the required column `goalsScored` to the `PlayerInGroup` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Game" DROP COLUMN "teams";

-- AlterTable
ALTER TABLE "PlayerInGroup" ADD COLUMN     "goalsScored" INTEGER NOT NULL;
