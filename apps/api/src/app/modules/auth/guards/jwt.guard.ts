import { UserDTO } from '#repository';
import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    constructor(
        private readonly reflector: Reflector
    ){
        super();
    };

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const isPublic = this.reflector.getAllAndOverride<boolean>(process.env.JWT_PUBLIC, [
          context.getHandler(),
          context.getClass()
        ]);
        if (isPublic) return true;

        return super.canActivate(context);
    };

    handleRequest<TUser = UserDTO>(err: Error, user: TUser): TUser {
        if (err || !user) {
          throw err || new UnauthorizedException('Auth token not found');
        }
        return user;
      }
}