import { middyfy } from '@lib/middleware';
import { GetPlayerByEmailUseCase } from './useCase';

export default middyfy(async (event) => {
  const { email } = event.body;
  const getPlayerByEmailUseCase = new GetPlayerByEmailUseCase();
  console.log('email 1 ' + email);

  try {
    const player = await getPlayerByEmailUseCase.exec(email);
    return {
      statusCode: 201,
      body: JSON.stringify(player)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error)
    };
  }
});
