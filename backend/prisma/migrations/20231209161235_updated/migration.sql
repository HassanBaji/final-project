/*
  Warnings:

  - You are about to drop the column `first_name` on the `Player` table. All the data in the column will be lost.
  - You are about to drop the column `last_name` on the `Player` table. All the data in the column will be lost.
  - The primary key for the `PlayerInGames` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `games_id` on the `PlayerInGames` table. All the data in the column will be lost.
  - You are about to drop the column `group_id` on the `PlayerInGames` table. All the data in the column will be lost.
  - You are about to drop the column `player_id` on the `PlayerInGames` table. All the data in the column will be lost.
  - The primary key for the `PlayerInGroup` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `added_at` on the `PlayerInGroup` table. All the data in the column will be lost.
  - You are about to drop the column `group_id` on the `PlayerInGroup` table. All the data in the column will be lost.
  - You are about to drop the column `player_id` on the `PlayerInGroup` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `PlayerInGroup` table. All the data in the column will be lost.
  - You are about to drop the `Games` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `fName` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lName` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gameId` to the `PlayerInGames` table without a default value. This is not possible if the table is not empty.
  - Added the required column `groupId` to the `PlayerInGames` table without a default value. This is not possible if the table is not empty.
  - Added the required column `playedId` to the `PlayerInGames` table without a default value. This is not possible if the table is not empty.
  - Added the required column `groupId` to the `PlayerInGroup` table without a default value. This is not possible if the table is not empty.
  - Added the required column `playedId` to the `PlayerInGroup` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `PlayerInGroup` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Games" DROP CONSTRAINT "Games_groupId_fkey";

-- DropForeignKey
ALTER TABLE "PlayerInGames" DROP CONSTRAINT "PlayerInGames_games_id_fkey";

-- DropForeignKey
ALTER TABLE "PlayerInGames" DROP CONSTRAINT "PlayerInGames_group_id_fkey";

-- DropForeignKey
ALTER TABLE "PlayerInGames" DROP CONSTRAINT "PlayerInGames_player_id_fkey";

-- DropForeignKey
ALTER TABLE "PlayerInGroup" DROP CONSTRAINT "PlayerInGroup_gamesId_fkey";

-- DropForeignKey
ALTER TABLE "PlayerInGroup" DROP CONSTRAINT "PlayerInGroup_group_id_fkey";

-- DropForeignKey
ALTER TABLE "PlayerInGroup" DROP CONSTRAINT "PlayerInGroup_player_id_fkey";

-- DropForeignKey
ALTER TABLE "Team" DROP CONSTRAINT "Team_gamesId_fkey";

-- AlterTable
ALTER TABLE "Player" DROP COLUMN "first_name",
DROP COLUMN "last_name",
ADD COLUMN     "fName" TEXT NOT NULL,
ADD COLUMN     "lName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "PlayerInGames" DROP CONSTRAINT "PlayerInGames_pkey",
DROP COLUMN "games_id",
DROP COLUMN "group_id",
DROP COLUMN "player_id",
ADD COLUMN     "gameId" TEXT NOT NULL,
ADD COLUMN     "groupId" TEXT NOT NULL,
ADD COLUMN     "playedId" TEXT NOT NULL,
ADD CONSTRAINT "PlayerInGames_pkey" PRIMARY KEY ("playedId", "gameId");

-- AlterTable
ALTER TABLE "PlayerInGroup" DROP CONSTRAINT "PlayerInGroup_pkey",
DROP COLUMN "added_at",
DROP COLUMN "group_id",
DROP COLUMN "player_id",
DROP COLUMN "updated_at",
ADD COLUMN     "addedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "groupId" TEXT NOT NULL,
ADD COLUMN     "playedId" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD CONSTRAINT "PlayerInGroup_pkey" PRIMARY KEY ("playedId", "groupId");

-- DropTable
DROP TABLE "Games";

-- CreateTable
CREATE TABLE "Game" (
    "id" TEXT NOT NULL,
    "date_and_time" TIMESTAMP(3) NOT NULL,
    "location" TEXT NOT NULL,
    "teams" TEXT NOT NULL,
    "gameFinished" BOOLEAN NOT NULL,
    "groupId" TEXT,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PlayerInGroup" ADD CONSTRAINT "PlayerInGroup_playedId_fkey" FOREIGN KEY ("playedId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerInGroup" ADD CONSTRAINT "PlayerInGroup_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerInGroup" ADD CONSTRAINT "PlayerInGroup_gamesId_fkey" FOREIGN KEY ("gamesId") REFERENCES "Game"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerInGames" ADD CONSTRAINT "PlayerInGames_playedId_fkey" FOREIGN KEY ("playedId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerInGames" ADD CONSTRAINT "PlayerInGames_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerInGames" ADD CONSTRAINT "PlayerInGames_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_gamesId_fkey" FOREIGN KEY ("gamesId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
