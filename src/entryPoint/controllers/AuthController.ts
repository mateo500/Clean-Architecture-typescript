import {
  controller,
  httpPost,
  interfaces,
  request,
  response,
} from 'inversify-express-utils';
import { ISigninUseCase } from '../../application/use-case/ISigninUseCase';
import { inject } from 'inversify';
import { TYPES } from '../../constants/types';
import { AuthServiceLocator } from '../../configuration/use-cases/AuthServiceLocator';
import { Request, Response } from 'express';
import { IUserDto } from '../../application/use-case/IUserDto';

@controller('/auth')
export class AuthController implements interfaces.Controller {
  private readonly signInUseCase: ISigninUseCase;

  constructor(
    @inject(TYPES.AuthServiceLocator) serviceLocator: AuthServiceLocator
  ) {
    this.signInUseCase = serviceLocator.initSignInUseCase();
  }

  @httpPost('/signin')
  public sign(@request() req: Request, @response() res: Response): Response {
    const userDto: IUserDto = req.body;
    return res.send(this.signInUseCase.signin(userDto));
  }
}
