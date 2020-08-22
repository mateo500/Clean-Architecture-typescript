import { IUserRepository } from '../application/repositories/IUserRepository';
import { User } from '../domain/User';
import { injectable } from 'inversify';

@injectable()
export class FakeRepo implements IUserRepository {
  public fetch(user: User): User {
    return user;
  }
}
