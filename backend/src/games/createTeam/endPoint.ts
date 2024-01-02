import { middyfy } from '@lib/middleware';
import { CreateTeamUseCase } from './useCase';

export default middyfy(async (event) => {
  const { teams, gameId } = event.body;
  console.log('teams ' + JSON.stringify(teams));
  const useCase = new CreateTeamUseCase();

  try {
    const newGame = await useCase.exec(teams, gameId);
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
