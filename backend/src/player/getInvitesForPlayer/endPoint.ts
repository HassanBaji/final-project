import { middyfy } from '@lib/middleware';
import { GetInvitesForPlayer } from './useCase';

export default middyfy(async (event) => {
  const { id } = event.pathParameters;
  const useCase = new GetInvitesForPlayer();

  try {
    const invites = await useCase.exec(id);
    return {
      statusCode: 201,
      body: JSON.stringify(invites)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error)
    };
  }
});
