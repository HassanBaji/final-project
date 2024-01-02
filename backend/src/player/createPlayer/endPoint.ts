import { middyfy } from '@lib/middleware';
import { CreatePlayerUseCase } from './useCase';

export default middyfy(async (event) => {
  const { fName, lName, phone, email } = event.body;
  console.log(event.body);

  const createPlayerUseCase = new CreatePlayerUseCase();

  try {
    const newPlayer = await createPlayerUseCase.exec(
      fName,
      email,
      lName,
      phone
    );
    return {
      statusCode: 201,
      body: JSON.stringify(newPlayer)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error)
    };
  }
});
