import { middyfy } from '@lib/middleware';
import { leaveGameUseCase } from './useCase';

export default middyfy(async (event) => {
  const { playerId, gameId } = event.body;

  const useCase = new leaveGameUseCase();

  try {
    const leaving = await useCase.exec(playerId, gameId);
    return {
      statusCode: 201,
      body: JSON.stringify(leaving)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error)
    };
  }
});
