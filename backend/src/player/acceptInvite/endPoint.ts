import { middyfy } from '@lib/middleware';
import { AcceptInviteUseCase } from './useCase';

export default middyfy(async (event) => {
  const { playerId, groupId, inviteId } = event.body;
  console.log(event.body);

  const useCase = new AcceptInviteUseCase();

  try {
    const updatedGroup = await useCase.exec(playerId, groupId, inviteId);

    return {
      statusCode: 201,
      body: JSON.stringify(updatedGroup)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error)
    };
  }
});
