import { middyfy } from '@lib/middleware';
import { GetPlayersUseCase } from './useCase';

export default middyfy(async (event) => {
  const getPlayersUseCase = new GetPlayersUseCase();

  try {
    const players = await getPlayersUseCase.exec();
    return {
      statusCode: 201,
      body: JSON.stringify(players)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error)
    };
  }
});
