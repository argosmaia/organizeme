import { User } from "./User";

export interface UserContextType {
    user: User | null;
    fetchUser: () => void;
}