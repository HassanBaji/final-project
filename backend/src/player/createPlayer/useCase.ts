import { PrismaClient } from '@prisma/client';

export class CreatePlayerUseCase {
  public client: PrismaClient;

  constructor() {
    this.client = new PrismaClient();
  }

  public exec = async (
    fName: string,
    email: string,
    lName: string,
    phone: string
  ) => {
    try {
      const newPlayer = await this.client.player.create({
        data: {
          fName: fName,
          lName: lName,
          email: email,
          phone: phone
        }
      });

      return newPlayer;
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  };
}
