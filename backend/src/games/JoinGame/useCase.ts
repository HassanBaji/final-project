import { PrismaClient } from '@prisma/client';

export class JoinGameUseCase {
  public client: PrismaClient;

  constructor() {
    this.client = new PrismaClient();
  }

  public exec = async (playerId: string, gameId: string) => {
    try {
      const addToGame = await this.client.game.update({
        where: { id: gameId },
        data: {
          PlayerInGames: {
            create: [{ playedId: playerId, goalsScored: 0 }]
          }
        }
      });

      console.log('add ' + JSON.stringify(addToGame));
      return addToGame;
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  };
}
