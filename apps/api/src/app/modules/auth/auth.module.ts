import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from '@nestjs/jwt';
import { RepositoryModule } from "../../repository/repository.module";
import { AuthController } from "./controllers/auth.controller";
import { AuthService } from "./services/auth.service";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { JwtAuthGuard } from "./guards/jwt.guard";

@Module({
    imports: [
        RepositoryModule,
        PassportModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: '30s' }
        })
    ],
    controllers: [AuthController],
    providers: [
        AuthService, 
        JwtStrategy,
        {
            provide: 'APP_GUARD',
            useClass: JwtAuthGuard
        }
    ]
})
export class AuthModule {};