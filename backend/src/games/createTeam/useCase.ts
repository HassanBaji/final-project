import { Player, PlayerInGames, PrismaClient } from '@prisma/client';

export class CreateTeamUseCase {
  public client: PrismaClient;

  constructor() {
    this.client = new PrismaClient();
  }

  public exec = async (
    teams: {
      team1: {
        playedId_gameId: {
          playedId: string;
          gameId: string;
        };
      }[];
      team2: {
        playedId_gameId: {
          playedId: string;
          gameId: string;
        };
      }[];
    },
    gameId: string
  ) => {
    try {
      const gameUpdated = await this.client.game.update({
        where: {
          id: gameId
        },
        data: {
          Team: {
            create: [
              {
                player: {
                  connect: [...teams.team1]
                },
                name: 'team1'
              },
              {
                player: { connect: [...teams.team2] },
                name: 'team2'
              }
            ]
          }
        }
      });

      return gameUpdated;
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  };
}
