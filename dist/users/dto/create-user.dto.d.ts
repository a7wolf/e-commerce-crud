import { UserRole } from '../entities/user.entity';
export declare class CreateUserDto {
    name: string;
    email: string;
    role?: UserRole;
    password: string;
}
