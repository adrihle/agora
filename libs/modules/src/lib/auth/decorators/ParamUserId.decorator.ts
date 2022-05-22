import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { decode } from 'jsonwebtoken';
import { ExtractJwt } from 'passport-jwt';

export const ParamUserId = createParamDecorator(
  (_, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest() as Request;
    const token = ExtractJwt.fromAuthHeaderAsBearerToken()(request);
    const {userId} = decode(token) as {userId: string};
    return userId;
  },
);