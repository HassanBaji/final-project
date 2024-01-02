/*
  Warnings:

  - A unique constraint covering the columns `[playerId,groupId,statues]` on the table `Invite` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Invite_playerId_groupId_statues_key" ON "Invite"("playerId", "groupId", "statues");
