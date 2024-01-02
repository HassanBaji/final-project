/*
  Warnings:

  - Added the required column `goalsScored` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Made the column `phone` on table `Player` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `goalsScored` to the `PlayerInGames` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Game" ADD COLUMN     "goalsScored" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Player" ALTER COLUMN "phone" SET NOT NULL;

-- AlterTable
ALTER TABLE "PlayerInGames" ADD COLUMN     "goalsScored" INTEGER NOT NULL;
