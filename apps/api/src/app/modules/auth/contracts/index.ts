import { UserDTO } from "#repository";
import { SigninDTO } from "../dto/signin.dto";
import { SignupDTO } from "../dto/signup.dto";

export type ISigninRequest = SigninDTO;
export type ISignupRequest = SignupDTO;
export type IAuthResponse = UserDTO;