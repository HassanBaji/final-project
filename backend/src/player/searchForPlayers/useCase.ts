import { PrismaClient } from '@prisma/client';

export class SearchForPlayersUseCase {
  public client: PrismaClient;

  constructor() {
    this.client = new PrismaClient();
  }

  public exec = async (email: string) => {
    try {
      const players = await this.client.player.findMany({
        where: {
          email: {
            contains: email,
            mode: 'insensitive'
          }
        },
        take: 10
      });

      return players;
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  };
}
