import { PrismaClient } from '@prisma/client';

export class leaveGameUseCase {
  public client: PrismaClient;

  constructor() {
    this.client = new PrismaClient();
  }

  public exec = async (playerId: string, gameId: string) => {
    try {
      const leaveGame = await this.client.playerInGames.delete({
        where: { playedId_gameId: { playedId: playerId, gameId: gameId } }
      });

      return leaveGame;
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  };
}
