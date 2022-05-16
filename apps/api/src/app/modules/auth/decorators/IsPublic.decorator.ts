import { SetMetadata } from '@nestjs/common';

export const IsPublicEndpoint = () => SetMetadata(process.env.JWT_PUBLIC, true); 