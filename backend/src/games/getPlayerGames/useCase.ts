import { Game, PrismaClient } from '@prisma/client';

export class GetPlayerGamesUseCase {
  public client: PrismaClient;

  constructor() {
    this.client = new PrismaClient();
  }

  public exec = async (groupId: string[]) => {
    try {
      let allGames;
      groupId.forEach(async (id) => {
        const myGame = await this.client.game.findMany({
          where: { groupId: id }
        });
        allGames.push(myGame);
      });

      return allGames;
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  };
}
