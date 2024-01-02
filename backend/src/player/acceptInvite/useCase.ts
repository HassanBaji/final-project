import { PrismaClient } from '@prisma/client';

export class AcceptInviteUseCase {
  public client: PrismaClient;

  constructor() {
    this.client = new PrismaClient();
  }

  public exec = async (playerId: string, groupId: string, inviteId: string) => {
    try {
      const addToGroup = await this.client.group.update({
        where: { id: groupId },
        data: {
          PlayerInGroup: {
            create: [{ playedId: playerId, goalsScored: 0 }]
          }
        }
      });

      const updateInviteStatus = await this.client.invite.update({
        where: { id: inviteId },
        data: {
          statues: 'accepted'
        }
      });
      return { updateInviteStatus, addToGroup };
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  };
}
