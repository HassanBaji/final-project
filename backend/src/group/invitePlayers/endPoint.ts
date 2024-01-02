import { middyfy } from '@lib/middleware';
import { CreateInviteUseCase } from './useCase';

export default middyfy(async (event) => {
  const { playerId, groupId } = event.body;

  const useCase = new CreateInviteUseCase();

  try {
    const newInvite = await useCase.exec(groupId, playerId);
    return {
      statusCode: 201,
      body: JSON.stringify(newInvite)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error)
    };
  }
});
