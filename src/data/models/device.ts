import {User} from './user';
import {Role} from './role';

export interface Device {
    id: number;
    color: Colors;
    roleNumber: number;
    title: string;
    description: string;
    user: User;
    roles: Role[];
}
