import { middyfy } from '@lib/middleware';
import { CreateGroupUseCase } from './useCase';

export default middyfy(async (event) => {
  const { name, ownerId, image, mime } = event.body;

  const useCase = new CreateGroupUseCase();

  try {
    const newGroup = await useCase.exec(name, ownerId, image, mime);
    return {
      statusCode: 201,
      body: JSON.stringify(newGroup)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error)
    };
  }
});
