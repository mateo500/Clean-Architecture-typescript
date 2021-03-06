import { User } from '../../domain/User';

export interface IUserRepository {
  fetch(user: User): User;
}
