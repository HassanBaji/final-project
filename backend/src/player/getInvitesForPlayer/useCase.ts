import { PrismaClient } from '@prisma/client';
import { includes } from 'lodash';

export class GetInvitesForPlayer {
  public client: PrismaClient;

  constructor() {
    this.client = new PrismaClient();
  }

  public exec = async (id: string) => {
    try {
      const invites = await this.client.invite.findMany({
        where: { playerId: id, statues: 'pending' },
        include: {
          Group: {
            select: {
              name: true
            }
          }
        }
      });

      return invites;
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  };
}
