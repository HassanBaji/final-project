import { middyfy } from '@lib/middleware';
import { SearchForPlayersUseCase } from './useCase';

export default middyfy(async (event) => {
  const { id } = event.pathParameters;
  const useCase = new SearchForPlayersUseCase();

  try {
    const players = await useCase.exec(id);
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
