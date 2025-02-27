import { createContext } from 'react';
import { AuthContextType } from '@/types/interfaces/AuthContextType';

const AuthContext = createContext<AuthContextType | undefined>(undefined);