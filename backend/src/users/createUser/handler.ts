import { middyfy } from "@lib/middleware";

export default middyfy(async (event) => {
  console.log({ event });
  return {
    statusCode: 201,
    body: null
  }
});