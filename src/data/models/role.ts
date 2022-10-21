import {RoleState} from "@/data/enums/role-state";

export interface Role {
    id: number;
    state: RoleState;
    name: string;
}
