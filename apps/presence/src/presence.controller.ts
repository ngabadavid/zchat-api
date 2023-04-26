import { Controller, UseInterceptors } from '@nestjs/common';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { PresenceService } from './presence.service';
import { MessagePattern, Ctx, RmqContext } from '@nestjs/microservices';
import { SharedService } from '@app/shared';
import { RedisCacheService } from '@app/shared/services/redis-cache.service';

@Controller()
export class PresenceController {
  constructor(
    private readonly presenceService: PresenceService,
    private readonly sharedService: SharedService,
    private readonly redisCacheService: RedisCacheService,
  ) {}

  /*@MessagePattern({ cmd: 'get-presence' })
  async getPresence(@Ctx() context: RmqContext) {
    this.sharedService.acknowledgeMessage(context);
    return this.presenceService.getPresence();
  }*/

  @MessagePattern({ cmd: 'get-presence' })
  @UseInterceptors(CacheInterceptor)
  async getFoo(@Ctx() context: RmqContext) {
    this.sharedService.acknowledgeMessage(context);

    const foo = await this.redisCacheService.get('foo');
    if (foo) {
      console.log('CACHED');
      return foo;
    }

    const f = await this.presenceService.getFoo();
    this.redisCacheService.set('foo', f);
    return f;
  }
}
