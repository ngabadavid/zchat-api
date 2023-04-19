import { Injectable } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
import { BaseAbstractRepository } from './base/base.abstract.repository';
import { UserRepositoryInterface } from '../interfaces/users.repository.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepository
  extends BaseAbstractRepository<UserEntity>
  implements UserRepositoryInterface
{
  constructor(
    @InjectRepository(UserEntity)
    private readonly UserRepository: Repository<UserEntity>,
  ) {
    super(UserRepository);
  }
}
