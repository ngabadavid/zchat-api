import { UserEntity } from '@app/shared/entities/user.entity';
import { ExistingUserDTO } from '../dtos/existing-user.dto';
import { NewUserDTO } from '../dtos/new-user.dto';
import { UserJwt } from '@app/shared/interfaces/user-jwt.interface';
import { FriendRequestEntity } from '@app/shared/entities/friend-request.entity';

export interface AuthServiceInterface {
  getUsers();
  findByEmail(email: string): Promise<UserEntity>;
  hashPassword(password: string): Promise<string>;
  register(newUser: Readonly<NewUserDTO>): Promise<UserEntity>;
  doesPasswordMatch(password: string, hashedPassword: string): Promise<boolean>;
  validateUser(email: string, password: string): Promise<UserEntity>;
  login(existingUser: Readonly<ExistingUserDTO>);
  verifyJwt(jwt: string): Promise<{ user: UserEntity; exp: number }>;
  getUserFromHeader(jwt: string): Promise<UserJwt>;
  addFriend(userId: number, friendId: number): Promise<FriendRequestEntity>;
  getFriends(userId: number): Promise<FriendRequestEntity[]>;
}
