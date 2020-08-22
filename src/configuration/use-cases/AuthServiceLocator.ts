import SignInUseCase from '../../application/use-case/SignInUseCase';
import { injectable, inject } from 'inversify';
import { IUserRepository } from '../../application/repositories/IUserRepository';
import { TYPES } from '../../constants/types';

@injectable()
export class AuthServiceLocator {
  constructor(
    @inject(TYPES.IUserRepository) private readRepository: IUserRepository
  ) {}

  public initSignInUseCase() {
    return new SignInUseCase(this.readRepository);
  }
}
