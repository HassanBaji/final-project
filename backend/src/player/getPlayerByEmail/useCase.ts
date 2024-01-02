import { PrismaClient } from '@prisma/client';

export class GetPlayerByEmailUseCase {
  public client: PrismaClient;

  constructor() {
    this.client = new PrismaClient();
  }

  public exec = async (email: string) => {
    console.log('email 2 ' + email);
    try {
      const players = await this.client.player.findUnique({
        where: { email: email }
      });

      console.log('player ' + JSON.stringify(players));
      return players;
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  };
}
