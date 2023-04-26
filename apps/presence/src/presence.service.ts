import { Injectable } from '@nestjs/common';

@Injectable()
export class PresenceService {
  async getPresence() {
    return 'This is a presence';
  }
  getFoo() {
    console.log('NOT_CACHED!');
    return { foo: 'bar' };
  }
}
