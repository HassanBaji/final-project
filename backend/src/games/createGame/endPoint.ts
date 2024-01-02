import { middyfy } from '@lib/middleware';
import { CreateGameUseCase } from './useCase';

export default middyfy(async (event) => {
  const { location, date, timeFinish, timeStart, groupId, limit } = event.body;

  const useCase = new CreateGameUseCase();

  try {
    const newGame = await useCase.exec(
      location,
      date,
      timeStart,
      timeFinish,
      groupId,
      limit
    );
    return {
      statusCode: 201,
      body: JSON.stringify(newGame)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error)
    };
  }
});
