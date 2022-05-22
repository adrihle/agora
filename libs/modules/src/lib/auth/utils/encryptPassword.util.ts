import { randomBytes, scryptSync } from "crypto";

export const encryptPassword = (password: string) => {
    const salt = randomBytes(64).toString('hex');
    const buffer = scryptSync(password, salt, 64);
    const ecryptedPassword = `${buffer.toString('hex')}.${salt}`;
    return ecryptedPassword
};