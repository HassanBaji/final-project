import { middyfy } from '@lib/middleware';
import { GetPlayerGamesUseCase } from './useCase';

export default middyfy(async (event) => {
  const { id } = event.pathParameters;
  const useCase = new GetPlayerGamesUseCase();

  try {
    const groups = await useCase.exec(id);
    return {
      statusCode: 201,
      body: JSON.stringify(groups)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error)
    };
  }
});
