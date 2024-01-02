import { PrismaClient } from '@prisma/client';

export class GetPlayerGroupsUseCase {
  public client: PrismaClient;

  constructor() {
    this.client = new PrismaClient();
  }

  public exec = async (id: string) => {
    try {
      const myGroups = await this.client.group.findMany({
        where: { playerId: id },
        include: {
          PlayerInGroup: {
            select: {
              player: true
            }
          },
          games: {
            include: {
              Group: {
                select: {
                  name: true,
                  playerId: true
                }
              },
              PlayerInGames: {
                include: {
                  player: true
                }
              },
              Team: {
                include: {
                  player: {
                    include: {
                      player: true
                    }
                  }
                }
              }
            }
          }
        }
      });

      const groups = await this.client.group.findMany({
        where: {
          PlayerInGroup: {
            some: {
              playedId: id
            }
          }
        },
        include: {
          PlayerInGroup: {
            select: {
              player: true
            }
          },
          games: {
            include: {
              Group: {
                select: {
                  name: true,
                  playerId: true
                }
              },
              PlayerInGames: {
                include: {
                  player: true
                }
              },
              Team: {
                include: {
                  player: {
                    include: {
                      player: true
                    }
                  }
                }
              }
            }
          }
        }
      });

      const allGroups = [...myGroups, ...groups];

      const ids = [];

      const finalAllGroups = allGroups.map((group) => {});

      return allGroups;
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  };
}
