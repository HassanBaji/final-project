import { PrismaClient } from '@prisma/client';
import {
  PutObjectCommand,
  S3Client,
  GetObjectCommand
} from '@aws-sdk/client-s3';

export class CreateGroupUseCase {
  public client: PrismaClient;

  constructor() {
    this.client = new PrismaClient();
  }

  public exec = async (
    name: string,
    ownerId: string,
    image: string,
    mime: string
  ) => {
    try {
      const newGroup = await this.client.group.create({
        data: {
          name: name,
          playerId: ownerId
        }
      });

      const client = new S3Client({ region: 'us-east-1' });

      const base64Data = Buffer.from(image, 'base64');

      const key = `groupImage/${newGroup.id}`;

      const putCommand = new PutObjectCommand({
        Bucket: process.env.BUCKET_NAME!,
        Key: key,
        Body: base64Data,
        ContentType: mime
      });

      console.log('command ' + JSON.stringify(putCommand));
      const putResponse = await client.send(putCommand);

      console.log(
        'new group ' +
          JSON.stringify(newGroup) +
          'img ' +
          JSON.stringify(putResponse)
      );
      return newGroup;
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  };
}
