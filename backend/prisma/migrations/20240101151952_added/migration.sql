/*
  Warnings:

  - Added the required column `limit` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `winner` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Game" DROP CONSTRAINT "Game_groupId_fkey";

-- DropForeignKey
ALTER TABLE "Group" DROP CONSTRAINT "Group_playerId_fkey";

-- DropForeignKey
ALTER TABLE "PlayerInGames" DROP CONSTRAINT "PlayerInGames_gameId_fkey";

-- DropForeignKey
ALTER TABLE "PlayerInGames" DROP CONSTRAINT "PlayerInGames_playedId_fkey";

-- DropForeignKey
ALTER TABLE "PlayerInGames" DROP CONSTRAINT "PlayerInGames_teamId_fkey";

-- DropForeignKey
ALTER TABLE "PlayerInGroup" DROP CONSTRAINT "PlayerInGroup_gamesId_fkey";

-- DropForeignKey
ALTER TABLE "PlayerInGroup" DROP CONSTRAINT "PlayerInGroup_groupId_fkey";

-- DropForeignKey
ALTER TABLE "PlayerInGroup" DROP CONSTRAINT "PlayerInGroup_playedId_fkey";

-- AlterTable
ALTER TABLE "Game" ADD COLUMN     "limit" INTEGER NOT NULL,
ALTER COLUMN "goalsScored" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "Player" ADD COLUMN     "goalsScored" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "PlayerInGames" ALTER COLUMN "goalsScored" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "PlayerInGroup" ALTER COLUMN "goalsScored" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "Team" ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "winner" BOOLEAN NOT NULL;

-- AddForeignKey
ALTER TABLE "PlayerInGroup" ADD CONSTRAINT "PlayerInGroup_playedId_fkey" FOREIGN KEY ("playedId") REFERENCES "Player"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerInGroup" ADD CONSTRAINT "PlayerInGroup_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerInGroup" ADD CONSTRAINT "PlayerInGroup_gamesId_fkey" FOREIGN KEY ("gamesId") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Group" ADD CONSTRAINT "Group_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerInGames" ADD CONSTRAINT "PlayerInGames_playedId_fkey" FOREIGN KEY ("playedId") REFERENCES "Player"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerInGames" ADD CONSTRAINT "PlayerInGames_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerInGames" ADD CONSTRAINT "PlayerInGames_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;
