import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '..';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FriendRequestEntity } from '../entities/friend-request.entity';
import { FriendRequestsRepositoryInterface } from '../interfaces/friend-requests.repository.interface';

@Injectable()
export class FriendRequestsRepository
  extends BaseAbstractRepository<FriendRequestEntity>
  implements FriendRequestsRepositoryInterface
{
  constructor(
    @InjectRepository(FriendRequestEntity)
    private readonly FriendRequestRepository: Repository<FriendRequestEntity>,
  ) {
    super(FriendRequestRepository);
  }
}
