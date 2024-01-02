import { PrismaClient } from '@prisma/client';

export class CreateInviteUseCase {
  public client: PrismaClient;

  constructor() {
    this.client = new PrismaClient();
  }

  public exec = async (groupId: string, playerId: string) => {
    try {
      const newInvite = await this.client.invite.create({
        data: {
          groupId: groupId,
          playerId: playerId
        }
      });

      return newInvite;
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  };
}
