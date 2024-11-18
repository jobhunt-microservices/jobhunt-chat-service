import { SERVICE_NAME } from '@chat/constants';
import { logger } from '@chat/utils/logger.util';
import { Channel } from 'amqplib';
import { createConnection } from '../connections';
const log = logger('gigServiceProducer', 'debug');

class ChatProducer {
  publishDirectMessage = async (
    channel: Channel,
    exchangeName: string,
    routingKey: string,
    message: string,
    logMessage: string
  ): Promise<void> => {
    try {
      if (!channel) {
        channel = (await createConnection()) as Channel;
      }
      await channel.assertExchange(exchangeName, 'direct');
      channel.publish(exchangeName, routingKey, Buffer.from(message));
      log.info(logMessage);
    } catch (error) {
      log.log('error', SERVICE_NAME + ' publishDirectMessage() method error:', error);
    }
  };
}
export const chatProducer = new ChatProducer();
