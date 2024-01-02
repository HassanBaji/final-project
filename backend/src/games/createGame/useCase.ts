import { PrismaClient } from '@prisma/client';

export class CreateGameUseCase {
  public client: PrismaClient;

  constructor() {
    this.client = new PrismaClient();
  }

  public exec = async (
    location: string,
    date: string,
    timeStart: string,
    timeFinish: string,
    groupId: string,
    limit: string
  ) => {
    try {
      const newLimit = Number(limit);
      const newGame = await this.client.game.create({
        data: {
          location: location,
          date: date,
          timeStart: timeStart,
          timeFinish: timeFinish,
          groupId: groupId,
          gameFinished: false,
          limit: newLimit
        }
      });

      return newGame;
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  };
}
