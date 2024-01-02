/*
  Warnings:

  - You are about to drop the column `groupId` on the `PlayerInGames` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "PlayerInGames" DROP CONSTRAINT "PlayerInGames_groupId_fkey";

-- AlterTable
ALTER TABLE "PlayerInGames" DROP COLUMN "groupId";
