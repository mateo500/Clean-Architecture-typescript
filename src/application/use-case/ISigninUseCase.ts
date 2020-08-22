import { IUserDto } from './IUserDto';

export interface ISigninUseCase {
  signin(userDto: IUserDto): IUserDto;
}
