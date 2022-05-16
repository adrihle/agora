import { HttpStatus, INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AuthModule } from '../auth.module';
import { AppModule } from '../../../app.module';
import { SigninDTO } from '../dto/signin.dto';
import { AUTH_BASE_URL } from '../constants/endpoint';
import { SignupDTO } from '../dto/signup.dto';
import { RepositoryModule } from '../../../repository/repository.module';
import { UserRepository } from '../../../repository/user';

describe('Auth integration test', () => {
    let app: INestApplication;
    let repository: UserRepository;

    beforeEach(async () => {
        const fixture: TestingModule = await Test.createTestingModule({
            imports: [
                AuthModule, 
                AppModule,
                RepositoryModule
            ],
        }).compile();

        app = fixture.createNestApplication();

        repository = app.get<UserRepository>(UserRepository);


        return app.init();
    });

    it('Signin & Signup', async () => {
        const server = request(app.getHttpServer());

        const userSignin: SigninDTO = {
            email: 'lucia@gmail.com',
            password: '12345678'
        }

        const userSignup: SignupDTO = {
            email: 'amy@gmail.com',
            name: 'Amy',
            password: '12345678'
        }

        await server.post(`/${AUTH_BASE_URL}/signin`).type('form').send(userSignin).expect(HttpStatus.OK);

        const {body} = await server.post(`/${AUTH_BASE_URL}/signup`).type('form').send(userSignup).expect(HttpStatus.OK);

        await repository.deleteUser(body._id);
    });
}); 