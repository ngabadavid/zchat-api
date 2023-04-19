import { RmqOptions, RmqContext } from '@nestjs/microservices';

export interface SharedServiceInterface {
  getRmqOptions(queue: string): RmqOptions;
  acknowledgeMessage(context: RmqContext): void;
}
