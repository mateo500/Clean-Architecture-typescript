import { ISigninUseCase } from './ISigninUseCase';
import { IUserDto } from './IUserDto';
import { IUserRepository } from '../repositories/IUserRepository';
import { User } from '../../domain/User';

export default class SignInUseCase implements ISigninUseCase {
  private userRepository: IUserRepository;

  constructor(userRepo: IUserRepository) {
    this.userRepository = userRepo;
  }

  public signin(userDto: IUserDto): IUserDto {
    let user = new User(
      userDto.id,
      userDto.name,
      userDto.email,
      userDto.password,
      userDto.type
    );

    user = this.userRepository.fetch(user);

    const newUserDto: IUserDto = user;

    return newUserDto;
  }
}
