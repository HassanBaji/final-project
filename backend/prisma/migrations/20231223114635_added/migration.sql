-- CreateEnum
CREATE TYPE "InviteStatus" AS ENUM ('accepted', 'denied', 'pending');

-- AlterTable
ALTER TABLE "Invite" ADD COLUMN     "statues" "InviteStatus" NOT NULL DEFAULT 'pending';
