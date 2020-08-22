import 'reflect-metadata';
import { Container } from 'inversify';
import { AuthServiceLocator } from './configuration/use-cases/AuthServiceLocator';
import { TYPES } from './constants/types';
import { IUserRepository } from './application/repositories/IUserRepository';
import { FakeRepo } from './infrastructure/FakeRepo';
import { InversifyExpressServer } from 'inversify-express-utils';
import { Application, json } from 'express';
import './entryPoint/controllers/AuthController';

const inversifyContainer = new Container();

//bindings setup
inversifyContainer
  .bind<AuthServiceLocator>(TYPES.AuthServiceLocator)
  .to(AuthServiceLocator);

inversifyContainer.bind<IUserRepository>(TYPES.IUserRepository).to(FakeRepo);

const server = new InversifyExpressServer(inversifyContainer);
server.setConfig((app: Application) => {
  app.use(json());
});

server.build().listen(5000, () => console.log('server logged in 5000'));
