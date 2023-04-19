import { Injectable } from '@nestjs/common';

@Injectable()
export class PresenceService {
  async getPresence() {
    return 'This is a presence';
  }
}
