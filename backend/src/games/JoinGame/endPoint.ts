import { middyfy } from '@lib/middleware';
import { JoinGameUseCase } from './useCase';

export default middyfy(async (event) => {
  const { playerId, gameId } = event.body;

  const useCase = new JoinGameUseCase();

  try {
    const newJoing = await useCase.exec(playerId, gameId);
    return {
      statusCode: 201,
      body: JSON.stringify(newJoing)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error)
    };
  }
});
